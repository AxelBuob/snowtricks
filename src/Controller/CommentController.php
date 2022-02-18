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
use Symfony\Component\HttpFoundation\RedirectResponse;

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

    #[Route('/commentaire/{id}/editer', name: 'post_comment_delete')]
    public function commentDelete(Comment $comment, EntityManagerInterface $entityManager): RedirectResponse
    {
        $this->denyAccessUnlessGranted('EDIT', $comment);
        $post = $comment->getPost();

        $entityManager->remove($comment);
        $entityManager->flush();

        $this->addFlash('success', "Commentaire supprimé avec succès.");
        
        return $this->redirectToRoute('post_show',['slug' => $post->getSlug()]);
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
