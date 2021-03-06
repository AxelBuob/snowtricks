<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\User;
use App\Form\User\ChangePassWordType;
use App\Form\User\UserInformationType;
use App\Repository\ImageRepository;
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

class UserController extends AbstractController
{
    /**
     * Users upload directory
     * @var string
     */
    private CONST UPLOAD_DIRECTORY = 'user/';


    public function __construct(
        EntityManagerInterface $entityManager,
        SluggerInterface $slugger,
        FileUploaderService $fileUploader,
        ImageRepository $imageRepository,
        UserPasswordHasherInterface $passwordHasher,
        ImageController $imageController
    ){

        $this->entityManager = $entityManager;
        $this->slugger = $slugger;
        $this->fileUploader = $fileUploader;
        $this->imageRepository = $imageRepository;
        $this->passwordHasher = $passwordHasher;
        $this->imageController = $imageController;

    }

    /**
     * Return the path of users upload directory
     * @return string
     */
    private function getUploadsDirectory()
    {
        return $this->getParameter('uploads_directory') . self::UPLOAD_DIRECTORY;
    }

    #[Route('/compte', name: 'user_account')]
    /**
     * User profile page
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $form= $this->createForm(UserInformationType::class, $this->getUser());
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            if ($form->get('image')->getData()) {
                if($this->getUser()->getAvatar())
                {
                    $this->imageController->delete($this->getUser(), $this->getUser()->getAvatar(), $this->getUploadsDirectory());               
                }
                $image = $this->imageController->add($this->getUser(), $form->get('image')->getData(), $this->getUploadsDirectory());        
                $this->getUser()->setAvatar($image);
            }
            $this->entityManager->flush();
            $this->addFlash('success', 'Compte mis ?? jour avec succ??s.');
            return $this->redirectToRoute('user_account');
        }
        return $this->renderForm('user/index.html.twig', [
            'title' => 'Mon compte',
            'user' => $this->getUser(),
            'form' => $form
        ]);
    }

    #[Route('/compte/supprimer', name: 'user_account_delete')]
    /**
     * Delete user account
     *
     * @return RedirectResponse
     */
    public function deleteAccount(): RedirectResponse
    {
        $user = $this->getUser();
        $session = new Session();
        $session->invalidate();
        $this->entityManager->remove($user);
        $this->entityManager->flush();
        $this->addFlash('info', 'Merci votre compte a bien ??t?? supprim??.');
        return $this->redirectToRoute('post_index');
    }

    #[Route('/compte/supprimer/image/', name: 'user_image_delete')]
    /**
     * Delete user profile image
     *
     * @return RedirectResponse
     */
    public function deleteImage(): RedirectResponse
    {
        $this->imageController->delete($this->getUser(), $this->getUser()->getAvatar(), $this->getUploadsDirectory());
        $this->addFlash('success', 'Image supprim??e avec succ??s.');
        return $this->redirectToRoute('user_account');
    }

    #[Route('/compte/editer/mot-de-passe', name: 'user_password_edit')]
    /**
     * Let the user change his password
     *
     * @param Request $request
     * @return Response
     */
    public function changePassword(Request $request): Response
    {
        $form = $this->createForm(ChangePasswordType::class)->add('save', SubmitType::class, ['label' => 'Modifier mon mot de passe']);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->hashPassword($this->getUser(), $form->get('newPassword')->getData(), $this->passwordHasher);
            $this->entityManager->flush();
            $this->addFlash('success','Votre mot de passe a bien ??t?? mis ?? jour.');
            return $this->redirectToRoute('security_logout');
        }
        return $this->render('user/changePassword.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Hash user password
     *
     * @param User $user
     * @param string $password
     * @param UserPasswordHasherInterface $passwordHasher
     * @return void
     */
    private function hashPassword(User $user,string $password, UserPasswordHasherInterface $passwordHasher): void
    {
        $user->setPassword($passwordHasher->hashPassword($user, $password));
    }

}
