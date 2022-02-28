<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Entity\Post;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\Post\PostType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\Common\Collections\ArrayCollection;


#[IsGranted('IS_AUTHENTICATED_FULLY')]
/**
 * Post management
 */
class PostController extends AbstractController
{
    /**
     * Post image directory
     * @var string
     */
    private const UPLOAD_DIRECTORY = 'post/';

    public function __construct(
        EntityManagerInterface $entityManager,
        SluggerInterface $slugger,
        VideoController $videoController,
        ImageController $imageController
    )
    {
        $this->entityManager = $entityManager;
        $this->slugger = $slugger;
        $this->imageController = $imageController;
        $this->videoController = $videoController;
    }

    /**
     * Return the path of post images directory
     *
     * @return void
     */
    public function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

    #[Route('/ajouter-figure', name: 'post_add')]
    /**
     * Add post
     *
     * @param Request $request
     * @return Response
     */
    public function add(Request $request): Response
    {
        $post = new Post();
        $post->setUser($this->getUser());
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $post->setSlug($this->slugger->slug($form->get('name')->getData())->lower());
            
            foreach($post->getVideos() as $video)
            {
                $this->videoController->add($post, $video);
            }

            $uploaded_images = $form->get('images')->getData();

            if ($uploaded_images) {
                foreach ($uploaded_images as $image) {
                    $this->imageController->add($this->getUser(), $image, $this->getUploadsDirectory(), $post);
                }
            }

            $post->setCreatedAt(new \DateTime());
            $post->setUser($this->getUser());

            $this->entityManager->persist($post);
            $this->entityManager->flush();
            $this->addFlash('success', 'Figure ajouté avec succès.');
            return $this->redirectToRoute('post_show', ['slug' => $post->getSlug()]);
        }
        return $this->render('post/edit.html.twig', [
            'title' => 'Ajouter une figure',
            'form' => $form->createView(),
            'post' => $post
        ]);
    }

    #[Route('/editer-figure/{slug}', name: 'post_edit')]
    /**
     * Edit a post
     *
     * @param Post $post
     * @param Request $request
     * @return Response
     */
    public function edit(Post $post, Request $request): Response
    {
        $this->denyAccessUnlessGranted('EDIT', $post);

        $videos = new ArrayCollection();
        
        foreach ($post->getVideos() as $video) {
            $videos->add($video);
        }
        
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            foreach ($videos as $video) {

                $this->videoController->delete($post, $video);   
            }

            foreach ($post->getVideos() as $video) {
                $this->videoController->add($post, $video);
            }

            $uploaded_images = $form->get('images')->getData();
            
            if ($uploaded_images) {
                foreach ($uploaded_images as $image) {
                    $this->imageController->add($this->getUser(), $image, $this->getUploadsDirectory(), $post);
                }
            }

            $post->setUpdatedAt(new \DateTime());
            $this->entityManager->flush();
            $this->addFlash('success', 'Figure modifié avec succès.');
            return $this->redirectToRoute('post_edit', ['slug' => $post->getSlug()]);
        }

        return $this->render('post/edit.html.twig', [
            'title' => 'Modifier une figure',
            'post' => $post,
            'form' => $form->createView()
        ]);
    }

    #[Route('/supprimer-figure/{id}', name: 'post_delete')]
    /**
     * Delete a post
     *
     * @param Post $post
     * @return Response
     */
    public function delete(Post $post): Response
    {
        $this->denyAccessUnlessGranted('EDIT', $post); 
        if($post->getImages())
        {
            foreach($post->getImages() as $image)
            {
                $this->imageController->delete($this->getUser(), $image, $this->getUploadsDirectory());
            }
            $this->entityManager->flush();
        }
        $this->entityManager->remove($post);
        $this->entityManager->flush();
        $this->addFlash('success', 'L\'article a bien été supprimé.');
        return $this->RedirectToRoute('post_index');
    }


}
