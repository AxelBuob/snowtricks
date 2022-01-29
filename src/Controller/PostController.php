<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;

use App\Entity\Post;
use App\Entity\Image;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use App\Form\Comment\CommentType;
use App\Form\Post\EditPostType;

use App\Repository\CommentRepository;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;

use App\Service\FileUploaderService;
use App\Service\FileSystemService;
use Doctrine\ORM\EntityManager;
use PHPUnit\Util\Json;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\String\Slugger\SluggerInterface;


use Doctrine\ORM\Tools\Pagination\Paginator;


class PostController extends AbstractController
{

    private const UPLOAD_DIRECTORY = 'post/';

    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

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
    public function add(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {

        $post = new Post();
        $post->setUser($this->getUser());

        $form = $this->createForm(EditPostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $uploaded_images = $form->get('images')->getData();
            
            if($uploaded_images)
            {
                foreach($uploaded_images as $image)
                {
                    $fileUploader = new FileUploaderService($this->getUploadsDirectory(), $slugger);
                    $uploaded_image = $fileUploader->upload($image);
                    $image = new Image();
                    $image->setName($uploaded_image);
                    $entityManager->persist($image);
                    $post->addImage($image);
                }
            }
            $post->setCreatedAt(new \DateTime());
            $post->setUser($this->getUser());
            $post->setSlug($slugger->slug($form->get('name')->getData())->lower());
            $entityManager->persist($post);
            $entityManager->flush();

            return $this->redirectToRoute('post_show', ['slug' => $post->getSlug()]);
        }
        return $this->render('post/edit.html.twig', [
            'title' => 'Ajouter une figure',
            'form' => $form->createView()
        ]);
    }

    #[Route('/editer-figure/{slug}', name: 'post_edit'), IsGranted('ROLE_USER')]
    public function edit(Post $post, Request $request, EntityManagerInterface $entityManager, Postrepository $postRepository, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(EditPostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $uploaded_images = $form->get('images')->getData();
            if ($uploaded_images) {
                foreach ($uploaded_images as $image) {
                    $fileUploader = new FileUploaderService($this->getUploadsDirectory(), $slugger);
                    $uploaded_image = $fileUploader->upload($image);
                    $image = new Image();
                    $image->setName($uploaded_image);
                    $entityManager->persist($image);
                    $post->addImage($image);
                }
            }
            $post->setUpdatedAt(new \DateTime());
            $entityManager->flush();
            $this->addFlash('success', 'Figure modifié avec succès.');
            return $this->redirectToRoute('post_edit', ['slug' => $post->getSlug()]);
        }

        return $this->render('post/edit.html.twig', [
            'title' => 'Modifier une figure',
            'form' => $form->createView(),
            'post' => $post
        ]);
    }

    #[Route('/supprimer-figure/{id}', name: 'post_delete'), IsGranted('ROLE_USER')]
    public function deletePost(Post $post, EntityManagerInterface $entityManager): Response
    {
        if($post->getImages())
        {
            foreach($post->getImages() as $image)
            {
                $this->deleteImage($image, $entityManager);
            }
        }
        $entityManager->remove($post);
        $entityManager->flush();
        $this->addFlash('success', 'L\'article  a bien été supprimé.');
        return $this->RedirectToRoute('app_home');
    }

    #[Route('/supprime-image/{id}', name: 'delete_image'), IsGranted('ROLE_USER')]
    public function deleteImageId(Image $image, Request $request, EntityManagerInterface $entityManager): RedirectResponse
    {
        $this->deleteImage($image, $entityManager);
        $this->addFlash('success', 'Image supprimé avec succès.');
        return $this->redirectToRoute('app_home');
    }

    public function commentForm(Post $post): Response
    {
        $form = $this->createForm(CommentType::class);

        return $this->render('post/_comment_form.html.twig', [
            'post' => $post,
            'form' => $form->createView()
        ]);
    }

    public function deleteImage(Image $image, EntityManagerInterface $entityManager): void
    {
        $fileSystem = new FileSystemService();
        $fileSystem->remove($this->getUploadsDirectory() . $image->getName());
        $entityManager->remove($image);
        $entityManager->flush();
    }
}
