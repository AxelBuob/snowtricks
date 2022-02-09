<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;
use App\Entity\Image;
use App\Service\FileSystemService;
use App\Service\FileUploaderService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ImageController extends AbstractController
{
    private const UPLOAD_DIRECTORY = 'post/';

    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

    #[Route('/figure/{id}/upload/images', name: 'upload_images', methods: "POST")]
    public function uploadImages(Post $post, Request $request, EntityManagerInterface $entityManager, FileUploaderService $uploaderHelper, ValidatorInterface $validator, SluggerInterface $slugger)
    {
        $uploadedFile = $request->files->get('images');
        dump($uploadedFile);
        $violations = $validator->validate($uploadedFile, [
            new NotBlank(),
            new File([
                'maxSize' => '2M',
                'mimeTypes' => [
                    'image/*'
                ]
            ])
        ]);

        if($violations->count() > 0 ){
            return $this->json($violations, 400);

            // $violation = $violations['0'];
            // $this->addFlash('danger', $violation->getMessage());
            // return $this->redirectToRoute('post_edit', [
            //     'slug' => $post->getSlug()
            // ]);
        }
        
        $file = $uploaderHelper->upload($uploadedFile, $this->getUploadsDirectory(), $slugger);
        $image = new Image();
        $image->setName($file->getFilename());
        $image->setOriginalFilename($file->getOriginalFilename());
        $image->setPost($post);
        $entityManager->persist($image);
        $entityManager->flush();

        return $this->redirectToRoute('post_edit', [
            'slug' => $post->getSlug()
        ]);
    }

    #[Route('/supprimer-image/{id}', name: 'delete_image', methods: 'DELETE')]
    public function supprimerImage(Image $image, EntityManagerInterface $entityManager):  Response
    {

        $entityManager->remove($image);
        $entityManager->flush();
        $this->deleteImage($this->getUploadsDirectory(). $image->getName());
        return new Response(null, 204);

    }


    // #[Route('/supprime-image/{id}', name: 'delete_image'), IsGranted('ROLE_USER')]
    // public function deleteImageId(Image $image, EntityManagerInterface $entityManager): RedirectResponse
    // {
    //     $this->deleteImage($image, $entityManager);
    //     $this->addFlash('success', 'Image supprimé avec succès.');
    //     return $this->redirectToRoute('app_home');
    // }

    public function deleteImage($image): void
    {
        $fileSystem = new FileSystemService();

        $result = $fileSystem->remove($image);

        if ($result === false) {
            throw new \Exception($image);
        }
       
    }
}
