<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;
use App\Entity\Image;
use Exception;
use Symfony\Component\Security\Core\Security;

class ImageVoter extends Voter
{

    public function __construct(Security $security)
    {
        $this->security = $security;
    }
    
    protected function supports(string $attribute, $subject): bool
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['EDIT', ''])
            && $subject instanceof \App\Entity\Image;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }
        if (!$subject instanceof Image) {
            throw new  Exception('Wrong type somehow passed!');
        }

        if ($this->security->isGranted('ROLE_ADMIN')) {
            return true;
        }

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'EDIT':
                return $user === $subject->getUser();
        }

        return false;
    }
}
