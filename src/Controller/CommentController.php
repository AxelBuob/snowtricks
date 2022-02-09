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

            // When an event is dispatched, Symfony notifies it to all the listeners
            // and subscribers registered to it. Listeners can modify the information
            // passed in the event and they can even modify the execution flow, so
            // there's no guarantee that the rest of this controller will be executed.
            // See https://symfony.com/doc/current/components/event_dispatcher.html
            //$eventDispatcher->dispatch(new CommentCreatedEvent($comment));

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
