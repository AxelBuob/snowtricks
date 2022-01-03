<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\User\ChangePasswordType;
use App\Form\User\UserInformationType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

use Symfony\Component\HttpFoundation\Session\Session;

class UserController extends AbstractController
{
    #[Route('/mon-compte', name: 'user_account')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED');
        $user = $this->getUser();

        $form= $this->createForm(UserInformationType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $entityManager->persist($user);
            $entityManager->flush();

        }

        return $this->renderForm('user/index.html.twig', [
            'title' => 'Mon compte',
            'user' => $user,
            'form' => $form
        ]);
    }

    #[Route('/supprimer-mon-compte', name: 'user_delete_account')]
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

    #[Route('/modifier-mon-mot-de-passe', name: 'user_change_password')]
    public function changeUserPassword(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $userPasswordHasher): Response
    {
        if(!$this->getUser())
        {
            return $this->redirectToRoute('app_login');
        }

        $user = $this->getUser();
        $form = $this->createForm(ChangePasswordType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $new_password = $userPasswordHasher->hashPassword($user, $form->get('password')->getData());
            $user->setPassword($new_password);
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash(
                'success',
                'Votre mot de passe a bien été mis à jour.'
            );

            return $this->redirectToRoute('user_account');
        }

        return $this->renderForm('user/changePassword.html.twig', [
            'title' => 'Modifier mon mot de passe',
            'user' => $user,
            'form' => $form
        ]);
    }
}
