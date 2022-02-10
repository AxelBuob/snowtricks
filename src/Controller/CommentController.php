<?php

namespace App\Controller;

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

use App\Entity\Post;
use App\Entity\Comment;
use App\Form\Comment\CommentType;
use Doctrine\Persistence\ManagerRegistry;

class CommentController extends AbstractController
{
    #[Route('/figure/{slug}/commentaire/ajouter', methods: ['POST'], name: 'post_comment_add')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function commentNew(Request $request, Post $post, EntityManagerInterface $entityManager): Response
    {
        $comment = new Comment();
        $comment->setUser($this->getUser());
        $post->addComment($comment);

        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($comment);
            $entityManager->flush();

            return $this->redirectToRoute('post_show', ['slug' => $post->getSlug()]);
        }

        return $this->render('post/comment_form_error.html.twig', [
            'post' => $post,
            'form' => $form->createView()
        ]);
    }

    public function commentForm(Post $post): Response
    {
        $form = $this->createForm(CommentType::class);
        return $this->render('post/_comment_form.html.twig', [
            'post' => $post,
            'form' => $form->createView()
        ]);
    }
}
