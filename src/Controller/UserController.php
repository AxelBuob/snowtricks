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

    private CONST UPLOADS_DIRECTORY = 'user/';

    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOADS_DIRECTORY;
    }



    #[Route('/mon-compte', name: 'user_account'), IsGranted('ROLE_USER')]
    public function index(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger, ImageRepository $imageRepository): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED');
        $user = $this->getUser();
        $form= $this->createForm(UserInformationType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $uploaded_image = $form->get('image')->getData();

            if($uploaded_image)
            {

                $this->removeImage($user, $imageRepository, $entityManager);

                $fileUploader = new FileUploaderService($this->getUploadsDirectory(), $slugger);
                $uploaded_image = $fileUploader->upload($uploaded_image);
                $image = new Image();
                $image->setName($uploaded_image);
                $image->addUser($user);
                $entityManager->persist($image);
                $this->addFlash('success', 'Image mis à jour avec succès.');
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

    #[Route('/supprimer-mon-compte', name: 'user_delete_account'), IsGranted('ROLE_USER')]
    public function deleteAccount(EntityManagerInterface $entityManager): RedirectResponse
    {
        $user = $this->getUser();

        $session = new Session();
        $session->invalidate();

        $entityManager->remove($user);
        $entityManager->flush();

        $this->addFlash('info', 'Merci votre compte a bien été supprimé.');
        return $this->redirectToRoute('app_home');
    }

    #[Route('/supprimer-profile-image', name: 'user_delete_image'), IsGranted('ROLE_USER')]
    public function deleteImage(EntityManagerInterface $entityManager, ImageRepository $imageRepository): RedirectResponse
    {
        $user = $this->getUser();
        $this->removeImage($user, $imageRepository, $entityManager);
        $entityManager->flush();
        $this->addFlash('success', 'Image supprimé avec succès.');
        return $this->redirectToRoute('user_account');
    }

    #[Route('/modifier-mon-mot-de-passe', methods: ['GET', 'POST'], name: 'user_change_password'), IsGranted('ROLE_USER')]
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

    private function removeImage(User $user, ImageRepository $imageRepository, EntityManagerInterface $entityManager): void
    {
        if ($user->getImage()) {

            $image_id = $user->getImage()->getId();
            $user_image = $this->getUploadsDirectory() . $user->getImage()->getName();

            $fileSystem = new FileSystemService($user_image);
            $fileSystem->remove($user_image);

            $image = $imageRepository->find($image_id);
            $image->removeUser($user);
            $entityManager->persist($image);
            $entityManager->remove($image);
        }
    }

}
