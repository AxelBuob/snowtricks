<?php

namespace App\Controller;

use App\Form\Admin\SiteconfigurationType;
use App\Form\User\UserInformationType;
use App\Repository\SiteConfigurationRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Form\AdminUserType;
use App\Form\Security\RegistrationFormType;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AdminController extends AbstractController
{

    #[Route('/admin', name: 'admin')]
    public function index(
        Request $request, 
        EntityManagerInterface $entityManager, 
        SiteConfigurationRepository $siteConfigurationRepository, 
        UserRepository $userRepository
    ): Response
    {
        $siteConfiguration = $siteConfigurationRepository->getSiteConfiguration();
        $users = $userRepository->findAll();

        $form = $this->createForm(SiteconfigurationType::class, $siteConfiguration);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $entityManager->persist($siteConfiguration);
            $entityManager->flush();

            $this->addFlash('success', 'Configuration mis à jour avec succès.');
            $this->redirectToRoute('admin');
        }

        return $this->render('admin/index.html.twig', [
            'title' => 'Administration',
            'form' => $form->createView(),
            'site' => $siteConfiguration,
            'users' => $users
        ]);
    }

    #[Route('/admin/edit/user/{id}', name: 'admin_edit_user')]
    public function userEdit(Request $request, User $user, EntityManagerInterface $entityManager)
    {
        $form = $this->createForm(AdminUserType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $entityManager->persist($user);
            $entityManager->flush();  
        }

        return $this->render('admin/user.html.twig', [
            'title' => 'Administration ' . $user->getFullName(),
            'form' => $form->createView()
        ]);
    }

    #[Route('/admin/delete/user/{id}', name: 'admin_user_delete')]

    public function userDelete(User $user, EntityManagerInterface $entityManager): RedirectResponse
    {
        $entityManager->remove($user);
        $entityManager->flush();
        $this->addFlash('success', 'L\utitlisateur a été supprimé avec succès.');
        return $this->redirectToRoute('admin');
    }
}
