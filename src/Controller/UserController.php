<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\User\ChangePassWordType;
use App\Form\User\UserInformationType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

use Symfony\Component\HttpFoundation\Session\Session;

class UserController extends AbstractController
{
    #[Route('/mon-compte', name: 'user_account'), IsGranted(['ROLE_USER'])]
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

    #[Route('/modifier-mon-mot-de-passe', methods: ['GET', 'POST'], name: 'user_change_password')]
    public function changePassword(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(ChangePasswordType::class)->add('save', SubmitType::class, ['label' => 'Modifier mon mot de passe']);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword($passwordHasher->hashPassword($user, $form->get('newPassword')->getData()));
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


}
