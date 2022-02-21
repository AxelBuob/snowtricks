<?php

namespace App\Controller;

use App\Form\Admin\SiteconfigurationType;
use App\Repository\SiteConfigurationRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Form\Admin\AdminUserType;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Controller\ImageController;
use App\Entity\Image;

class AdminController extends AbstractController
{

    public function __construct(
        EntityManagerInterface $entityManager,
        SiteConfigurationRepository $siteConfigurationRepository,
        UserRepository $userRepository,
        ImageController $imageController,
    )
    {
        $this->entityManager = $entityManager;   
        $this->siteConfigurationRepository = $siteConfigurationRepository;   
        $this->userRepository = $userRepository;   
        $this->imageController = $imageController;   
    }

    private const UPLOAD_DIRECTORY = 'admin/';

    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

    #[Route('/admin', name: 'admin')]
    public function index(
        Request $request, 
        
    ): Response
    {
        $siteConfiguration = $this->siteConfigurationRepository->getSiteConfiguration();
        $users = $this->userRepository->findAll();

        $form = $this->createForm(SiteconfigurationType::class, $siteConfiguration);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $uploaded_image = $form->get('image')->getData();
            if ($uploaded_image) {

                if($siteConfiguration->getImage()) {
                    $image = $siteConfiguration->getImage();
                    $siteConfiguration->setImage(null);
                    $this->imageController->delete($this->getuser(), $image, $this->getUploadsDirectory());
                }

                $image = $this->imageController->add($this->getUser(), $uploaded_image, $this->getUploadsDirectory());
                $siteConfiguration->setImage($image);
                $this->entityManager->persist($siteConfiguration);
            }

            $this->entityManager->flush();

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

    #[Route('/admin/delete/image/{id}', name: 'admin_delete_image')]
    public function deleteImage(Image $image): RedirectResponse
    {
        $siteConfiguration = $this->siteConfigurationRepository->getSiteConfiguration();
        $siteConfiguration->setImage(null);
        $this->imageController->delete($this->getuser(), $image, $this->getUploadsDirectory());
        $this->addFlash('success', 'Image supprimé avec succès.');
        return $this->redirectToRoute('admin');
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
