<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Image;
use App\Entity\User;
use App\Entity\Post;
use App\Repository\ImageRepository;
use App\Service\FileUploaderService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * Images management
 */
class ImageController extends AbstractController
{

    public function __construct(
        EntityManagerInterface $entityManager,
        FileUploaderService $fileUploader,
        SluggerInterface $slugger,
        ImageRepository $imageRepository,
    )
    {
        $this->entityManager = $entityManager;
        $this->fileUploader = $fileUploader;
        $this->slugger = $slugger;
        $this->imageRepository = $imageRepository;
    }

    /**
     * Delete an image using a fileUploaderService and entityManger
     *
     * @param User $user
     * @param Image $image
     * @param [type] $upload_directory
     * @return void
     */
    public function delete(User $user, Image $image, $upload_directory)
    {
        $this->denyAccessUnlessGranted('EDIT', $image);
        $this->fileUploader->remove($upload_directory . $image->getName());
        $this->entityManager->remove($image);
        $user->setAvatar(null);
        $this->entityManager->flush();
    }

    /**
     * Upload an image using fileUploaderService, also insert into database
     *
     * @param User $user
     * @param [type] $image
     * @param [type] $upload_directory
     * @param Post|null $post
     * @return void
     */
    public function add(User $user, $image, $upload_directory, Post $post = null)
    {
        $image = $this->fileUploader->upload($image, $upload_directory, $this->slugger);
        $image->setOwner($user);
        if($post)
        {
            $post->addImage($image);
            
        }
        $this->entityManager->persist($image);
        return $image;
    }

    #[Route('/featured_image/{id}', name: 'set_featured_image', methods: ['PUT'], requirements: ['id' => "[1-9]\d*"])]
    /**
     * Toggle featured to true or false 
     *
     * @param Image $image
     * @param EntityManagerInterface $entityManager
     * @return JsonResponse
     */
    public function toggleFeatured(Image $image, EntityManagerInterface $entityManager): JsonResponse
    {
        $this->denyAccessUnlessGranted('EDIT', $image);
        if ($image->isFeatured()) {
            $image->setFeatured(false);
        } else {
            $image->setFeatured(true);
        }
        $entityManager->flush();
        return new JsonResponse(['success' => 1]);
    }

    #[Route('/supprimer-figure-image/{id}', name: 'post_image_delete', methods: ["DELETE"])]
    /**
     * Delete an post image in ajax
     *
     * @param Image $image
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteImage(Image $image, Request $request, PostController $postController): JsonResponse
    {
        $this->denyAccessUnlessGranted('EDIT', $image);

        $upload_directory = $postController->getUploadsDirectory();
        $data = json_decode($request->getContent(), true);
        if ($this->isCsrfTokenValid('delete', $data['_token'])) {
            $this->delete($this->getuser(), $image, $upload_directory);
            return new JsonResponse(['success' => 1]);
        } else {
            return new JsonResponse(['error' => 'Token Invalide'], 400);
        }
    }

}
