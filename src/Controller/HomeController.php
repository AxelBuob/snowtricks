<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\CommentRepository;
use App\Repository\PostRepository;

use App\Entity\Post;


class HomeController extends AbstractController
{

    #[
        Route('/', defaults: ['page' => '1'], methods: ['GET'], name: 'app_home')
    ]
    public function index(int $page, PostRepository $postRepository): Response
    {
        $posts = $postRepository->findLatest($page);

        return $this->render('post/index.html.twig', [
            'posts' => $posts,
            'paginator' => json_encode([
                'numResults' => $posts->getNumResults(),
                'pageSize' => $posts->getPageSize(),
                'currentPage' => $posts->getCurrentPage(),
                'hasNextPage' => $posts->hasNextPage()
            ])
        ]);
    }

    #[
        Route('/page/{page}', name: 'loadMorePosts', requirements: ['page' => '\d+'])
    ]
    public function loadMorePosts(PostRepository $postRepository, $page = 5)
    {
        $posts = $postRepository->findLatest($page);

        return $this->render('post/_list_posts.html.twig', [
            'posts' => $posts
        ]);
    }

    #[
        Route('/figure/{slug}', defaults: ['page' => '1'],  methods: ['GET'], name: 'post_show', requirements: ['slug' => "[a-z0-9\-]*"]),
        Route('/figure/{slug}/page/{page}', methods: ['GET'], name: 'post_show_paginated', requirements: ['slug' => "[a-z0-9\-]*", 'page' => "[1-9]\d*"]),
    ]
    public function show(Post $post, int $page, CommentRepository $commentRepository): Response
    {
        $comments = $commentRepository->findLatest($post->getId(), $page);

        if (!$post) {
            throw $this->createNotFoundException('Cette figure n\'éxiste pas');
        }

        return $this->render('post/show.html.twig', [
            'post' => $post,
            'paginator' => $comments
        ]);
    }


}
