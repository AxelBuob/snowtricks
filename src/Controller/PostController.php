<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;

use App\Entity\Post;
use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;

class PostController extends AbstractController
{
    #[
        Route('/', defaults: ['page' => '1'], methods: ['GET'], name: 'app_home'),
        Route('/page/{page<[1-9]\d*>}', methods: ['GET'], name: 'app_home_paginated'),
    ]
    #[Cache(smaxage: 10)]
    public function index(int $page, PostRepository $posts): Response
    {
        $latestPosts = $posts->findLatest($page);

        // Every template name also has two extensions that specify the format and
        // engine for that template.
        // See https://symfony.com/doc/current/templates.html#template-naming
        return $this->render('post/index.html.twig', [
            'posts' => $latestPosts
        ]);
    }

    #[
        Route('/figure/{slug}-{id}', defaults: ['page' => '1'],  methods: ['GET'], name: 'post_show', requirements: ['slug'=>"[a-z0-9\-]*", 'id' => "[1-9]\d*"]),
        Route('/figure/{slug}-{id}/page/{page}', methods: ['GET'], name: 'post_show_paginated', requirements: ['slug' => "[a-z0-9\-]*", 'id' => "[1-9]\d*", 'page'=> "[1-9]\d*"]), 
    ]
    #[Cache(smaxage: 10)]
    public function show($id,  string $slug, int $page, PostRepository $postRepository, CommentRepository $commentRepository): Response
    { 
        $post = $postRepository->find($id);
        $comments = $commentRepository->findLatest($id, $page);

        if(!$post)
        {
            throw $this->createNotFoundException('Cette figure n\'éxiste pas');
        }

        if($post->getSlug() !== $slug)
        {
            return $this->redirectToRoute('post_show', [
                'id' => $post->getId(),
                'slug' => $post->getSlug()
            ], 301);
        }

        return $this->render('post/show.html.twig', [
            'post' => $post,
            'paginator' => $comments
        ]);
    }

    #[Route('/comment/{postId}/new', methods: ['POST'], name: 'comment_new')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[ParamConverter('post', options: ['mapping' => ['postId' => 'id']])]
    public function commentNew(Request $request, Post $post, EntityManagerInterface $entityManager): Response
    {
        $comment = new Comment();
        $comment->setAuthor($this->getUser());
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

            return $this->redirectToRoute('post_show', ['id' => $post->getId(), 'slug' => $post->getSlug()]);
        }

        return $this->render('post/comment_form_error.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    public function commentForm(Post $post): Response
    {
        $form = $this->createForm(CommentType::class);

        return $this->render('post/_comment_form.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }
}
