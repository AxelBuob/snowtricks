<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

use App\Entity\Post;
use App\Entity\Image;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use App\Form\Post\PostType;
use Doctrine\ORM\EntityManagerInterface;

use App\Service\FileUploaderService;
use Symfony\Component\String\Slugger\SluggerInterface;

use Doctrine\Common\Collections\ArrayCollection;

class PostController extends AbstractController
{

    private const UPLOAD_DIRECTORY = 'post/';

    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

    #[Route('/ajouter-figure', name: 'post_add'), IsGranted('ROLE_USER')]
    public function add(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger, FileUploaderService $fileUploader): Response
    {

        $post = new Post();
        $post->setUser($this->getUser());

        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            foreach($post->getVideos() as $video)
            {
                $video->setPost($post);
                $entityManager->persist($video);
            }

            $uploaded_images = $form->get('images')->getData();

            if ($uploaded_images) {
                foreach ($uploaded_images as $image) {
                    $image = $fileUploader->upload($image, $this->getUploadsDirectory(), $slugger);
                    $image->setPost($post);
                    $entityManager->persist($image);
                }
            }

            $post->setCreatedAt(new \DateTime());
            $post->setUser($this->getUser());
            $post->setSlug($slugger->slug($form->get('name')->getData())->lower());

            $entityManager->persist($post);
            $entityManager->flush();
            $this->addFlash('success', 'Figure ajouté avec succès.');
            return $this->redirectToRoute('post_show', ['slug' => $post->getSlug()]);
        }
        return $this->render('post/edit.html.twig', [
            'title' => 'Ajouter une figure',
            'form' => $form->createView(),
            'post' => $post
        ]);
    }

    #[Route('/editer-figure/{slug}', name: 'post_edit'), IsGranted('ROLE_USER')]
    public function edit(Post $post, Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger, FileUploaderService $fileUploader): Response
    {
        $videos = new ArrayCollection();
        foreach ($post->getVideos() as $video) {
            $videos->add($video);
        }

        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            foreach ($videos as $video) {
                if (false === $post->getVideos()->contains($video)) {
                    $video->getPost()->removeVideo($video);
                    $video->setPost(null);
                    $entityManager->persist($video);
                    $entityManager->remove($video);
                }
            }

            foreach($post->getVideos() as $video)
            {
                $video->setPost($post);
                $entityManager->persist($video);
            }


            $uploaded_images = $form->get('images')->getData();
            
            if ($uploaded_images) {
                foreach ($uploaded_images as $image) {
                    $image = $fileUploader->upload($image, $this->getUploadsDirectory(), $slugger);
                    $image->setPost($post);
                    $entityManager->persist($image);
                }
            }

            $post->setUpdatedAt(new \DateTime());
            $entityManager->persist($post);
            $entityManager->flush();
            $this->addFlash('success', 'Figure modifié avec succès.');
            return $this->redirectToRoute('post_edit', ['slug' => $post->getSlug()]);
        }

        return $this->render('post/edit.html.twig', [
            'title' => 'Modifier une figure',
            'post' => $post,
            'form' => $form->createView()
        ]);
    }

    #[Route('/supprimer-figure/{id}', name: 'post_delete'), IsGranted('ROLE_USER')]
    public function deletePost(Post $post, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($post);
        $entityManager->flush();
        $this->addFlash('success', 'L\'article  a bien été supprimé.');
        return $this->RedirectToRoute('app_home');
    }

}
