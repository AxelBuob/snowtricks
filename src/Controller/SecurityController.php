<?php

namespace App\Controller;


use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Mime\Address;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Security\LoginFormAuthenticator;

use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use App\Security\EmailVerifier;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

use App\Form\Security\RegistrationFormType;


class SecurityController extends AbstractController

{
    private EmailVerifier $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    /**
     * @Route("/connexion", name="security_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('post_index');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername, 
            'error' => $error,
            'title' => 'Connexion'
        ]);
    }

    #[Route("/deconnexion", name: "security_logout")]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route('/inscription', name: 'security_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, LoginFormAuthenticator $authenticator, EntityManagerInterface $entityManager): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('post_index');
        }

        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword($userPasswordHasher->hashPassword($user, $form->get('password')->getData()))
                ->setCreatedAt(new \DateTime())
                ->setIsVerified(false)
                ->setRoles(['ROLE_USER']);

            $entityManager->persist($user);
            $entityManager->flush();

            
            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation(
                'security_verify_email',
                $user,
                (new TemplatedEmail())
                ->from(new Address('buobaxel@gmail.com', 'Axel Buob'))
                ->to($user->getEmail())
                ->subject('Merci de confirmer votre email')
                ->htmlTemplate('security/confirmation_email.html.twig')
            );
            // do anything else you need here, like send an email
            $this->addFlash('info', 'Un lien de confirmation vous a été envoyé par email.');
            
            return $this->redirectToRoute('post_index');

            // return $userAuthenticator->authenticateUser(
            //     $user,
            //     $authenticator,
            //     $request
            // );
        }

        return $this->render('security/register.html.twig', [
            'form' => $form->createView(),
            'title' => 'Inscription'
        ]);
    }

    #[Route('/email-verification', name: 'security_verify_email')]
    public function verifyUserEmail(Request $request): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('error', $exception->getReason());

            return $this->redirectToRoute('app_register');
        }

        // @TODO Change the redirect on success and handle or remove the flash message in your templates
        $this->addFlash('success', 'Votre adresse email a bien été vérifié.');

        return $this->redirectToRoute('user_account');
    }
}
