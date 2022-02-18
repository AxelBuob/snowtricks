<?php

namespace App\Controller;

use App\Form\Admin\SiteconfigurationType;
use App\Repository\SiteConfigurationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Image;
use App\Service\FileSystemService;
use App\Service\FileUploaderService;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\String\Slugger\SluggerInterface;

class AdminController extends AbstractController
{
    private const UPLOAD_DIRECTORY = 'site
    /';

    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

    #[Route('/admin', name: 'admin')]
    public function index(
        Request $request, 
        EntityManagerInterface $entityManager, 
        SiteConfigurationRepository $siteConfigurationRepository, 
        FileUploaderService $fileUploaderService,
        SluggerInterface $slugger
    ): Response
    {
        $siteConfiguration = $siteConfigurationRepository->getSiteConfiguration();

        
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
            'site' => $siteConfiguration
        ]);
    }
}
