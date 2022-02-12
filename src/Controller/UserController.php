<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use App\Entity\Image;
use App\Entity\User;
use App\Form\User\ChangePassWordType;
use App\Form\User\UserInformationType;

use App\Repository\ImageRepository;

use App\Service\FileSystemService;
use App\Service\FileUploaderService;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class UserController extends AbstractController
{

    private CONST UPLOAD_DIRECTORY = 'user/';

    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

    #[Route('/compte', name: 'user_account')]
    public function index(
        Request $request,
        EntityManagerInterface $entityManager,
        ImageRepository $imageRepository, 
        SluggerInterface $slugger, 
        FileUploaderService $fileUploader,
        FileSystemService $fileSystem
    ): Response
    {
        $user = $this->getUser();
        $form= $this->createForm(UserInformationType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $uploaded_image = $form->get('image')->getData();
            if ($uploaded_image) {
                if($user->getImage())
                {
                    $this->removeImage($user->getImage(), $imageRepository, $entityManager, $fileSystem);
                }
                $image = $fileUploader->upload($uploaded_image, $this->getUploadsDirectory(), $slugger);
                $image->setUser($user);
                $entityManager->persist($image);
            }

            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Compte mis à jour avec succès.');
            return $this->redirectToRoute('user_account');
        }

        return $this->renderForm('user/index.html.twig', [
            'title' => 'Mon compte',
            'user' => $user,
            'form' => $form
        ]);
    }

    #[Route('/compte/supprimer', name: 'user_account_delete')]
    public function deleteAccount(EntityManagerInterface $entityManager): RedirectResponse
    {
        $user = $this->getUser();
        $session = new Session();
        $session->invalidate();
        $entityManager->remove($user);
        $entityManager->flush();
        $this->addFlash('info', 'Merci votre compte a bien été supprimé.');
        return $this->redirectToRoute('post_index');
    }

    #[Route('/compte/supprimer/image', name: 'user_image_delete'), IsGranted('ROLE_USER')]
    public function deleteImage(EntityManagerInterface $entityManager, ImageRepository $imageRepository, FileSystemService $fileSystem): RedirectResponse
    {
        $image = $this->getUser()->getImage();
        $this->denyAccessUnlessGranted('EDIT', $image);
        $this->removeImage($image, $imageRepository, $entityManager, $fileSystem);
        $entityManager->flush();
        $this->addFlash('success', 'Image supprimé avec succès.');
        return $this->redirectToRoute('user_account');
    }

    #[Route('/compte/editer/mot-de-passe', name: 'user_password_edit'), IsGranted('ROLE_USER')]
    public function changePassword(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(ChangePasswordType::class)->add('save', SubmitType::class, ['label' => 'Modifier mon mot de passe']);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $this->hashPassword($user, $form->get('newPassword')->getData(), $passwordHasher);

            $entityManager->flush();
            $this->addFlash(
                'success',
                'Votre mot de passe a bien été mis à jour.'
            );
            return $this->redirectToRoute('app_logout');
        }
        return $this->render('user/changePassword.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    private function hashPassword(User $user,string $password, UserPasswordHasherInterface $passwordHasher): void
    {
        $user->setPassword($passwordHasher->hashPassword($user, $password));
    }

    private function removeImage(Image $image, ImageRepository $imageRepository, EntityManagerInterface $entityManager, FileSystemService $fileSystem): void
    {
        if ($image) {
            $image_id = $image->getId();
            $user_image = $this->getUploadsDirectory() . $image->getName();
            $fileSystem->remove($user_image);
            $image = $imageRepository->find($image_id);
            $image->setUser(null);
            $entityManager->persist($image);
            $entityManager->remove($image);
        }
    }

}
