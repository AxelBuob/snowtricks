<?php

namespace App\Controller;

use App\Form\SiteconfigurationType;
use App\Repository\SiteConfigurationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Image;
use App\Service\FileSystemService;
use App\Service\FileUploaderService;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'admin')]
    public function index(Request $request, EntityManagerInterface $entityManager, SiteConfigurationRepository $siteConfigurationRepository, FileUploaderService $fileUploaderService, FileSystemService $fileSystemService): Response
    {
        $siteConfiguration = $siteConfigurationRepository->getSiteConfiguration();

        
        $form = $this->createForm(SiteconfigurationType::class, $siteConfiguration);
        $form->handleRequest($request);
    

        if($form->isSubmitted() && $form->isValid())
        {
            $logo = $form->get('logo')->getData();
            if($logo)
            {
                $image = new Image();
                
            }

            $entityManager->persist($siteConfiguration);
            $entityManager->flush();
        }
        
        

        return $this->render('admin/index.html.twig', [
            'title' => 'Administration',
            'form' => $form->createView()
        ]);
    }
}
