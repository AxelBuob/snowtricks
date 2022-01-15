<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use App\Entity\Post;
use App\Form\Comment\CommentType;
use App\Form\Post\EditPostType;
use App\Repository\CommentRepository;
use Symfony\Component\String\Slugger\SluggerInterface;


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
        Route('/figure/{slug}', defaults: ['page' => '1'],  methods: ['GET'], name: 'post_show', requirements: ['slug' => "[a-z0-9\-]*"]),
        Route('/figure/{slug}/page/{page}', methods: ['GET'], name: 'post_show_paginated', requirements: ['slug' => "[a-z0-9\-]*", 'page'=> "[1-9]\d*"]), 
    ]
    #[Cache(smaxage: 10)]
    public function show(Post $post, int $page, CommentRepository $commentRepository): Response
    {
        $comments = $commentRepository->findLatest($post->getId(), $page);

        if (!$post)
        {
            throw $this->createNotFoundException('Cette figure n\'éxiste pas');
        }

        return $this->render('post/show.html.twig', [
            'post' => $post,
            'paginator' => $comments
        ]);
    }

    #[Route('/ajouter-figure', name: 'post_add'), IsGranted('ROLE_USER')]
    public function add(Request $request, EntityManagerInterface $entityManager, PostRepository $postInventory, SluggerInterface $slugger): Response
    {

        $post = new Post();
        $post->setUser($this->getUser());

        $form = $this->createForm(EditPostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $uploaded_images = $form->get('images')->getData();
            if($uploaded_images)
            {
                dd($uploaded_images);
            }

            $post->setCreatedAt(new \DateTime());
            $post->setUser($this->getUser());
            $post->setSlug($slugger->slug($form->get('name')->getData())->lower());
            $entityManager->persist($post);
            $entityManager->flush();

            return $this->redirectToRoute('post_show', ['slug' => $post->getSlug()]);
        }
        return $this->render('post/edit.html.twig', [
            'title' => 'Ajouter uen figure',
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
