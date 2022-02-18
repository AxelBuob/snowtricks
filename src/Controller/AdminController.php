<?php

namespace App\Controller;

use App\Form\Admin\SiteconfigurationType;
use App\Repository\SiteConfigurationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{

    #[Route('/admin', name: 'admin')]
    public function index(
        Request $request, 
        EntityManagerInterface $entityManager, 
        SiteConfigurationRepository $siteConfigurationRepository, 
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
