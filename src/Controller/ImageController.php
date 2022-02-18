<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Image;
use App\Entity\User;
use App\Entity\Post;
use App\Service\FileUploaderService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\String\Slugger\SluggerInterface;

class ImageController extends AbstractController
{

    public function __construct(
        EntityManagerInterface $entityManager,
        FileUploaderService $fileUploader,
        SluggerInterface $slugger,
    )
    {
        $this->entityManager = $entityManager;
        $this->fileUploader = $fileUploader;
        $this->slugger = $slugger;
    }

    public function delete(User $user, Image $image, $upload_directory)
    {
        $this->denyAccessUnlessGranted('EDIT', $image);
        $this->fileUploader->remove($upload_directory . $image->getName());
        $this->entityManager->remove($image);
        $user->setAvatar(null);
        $this->entityManager->flush();
    }

    public function add(User $user, $image, $upload_directory, Post $post = null)
    {
        $image = $this->fileUploader->upload($image, $upload_directory, $this->slugger);
        $user->setAvatar($image);
        $image->setOwner($user);
        if($post)
        {
            $image->setPost($post);
        }
        $this->entityManager->flush();
    }

    #[Route('/featured_image/{id}', name: 'set_featured_image', methods: ['PUT'], requirements: ['id' => "[1-9]\d*"])]
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
    public function deleteImage(Image $image, Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted('EDIT', $image);
        $data = json_decode($request->getContent(), true);
        if ($this->isCsrfTokenValid('delete' . $image->getId(), $data['_token'])) {

            $this->delete($this->getuser(), $image, '/post');
            $this->entityManager->remove($image);
            $this->entityManager->flush();

            return new JsonResponse(['success' => 1]);
        } else {
            return new JsonResponse(['error' => 'Token Invalide'], 400);
        }
    }
}