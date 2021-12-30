<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{

    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        $this->loadUsers($manager);
    }

    private function loadUsers(ObjectManager $manager): void
    {
        foreach ($this->getUserData() as [$firstname, $lastname, $password, $email, $roles]) {
            $user = new User();
            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setPassword($this->passwordHasher->hashPassword($user, $password));
            $user->setEmail($email);
            $user->setRoles($roles);
            $user->setCreatedAt(new \DateTime);
            $user->setIsVerified(true);
            $manager->persist($user);
            $this->addReference($email, $user);
        }
        $manager->flush();
    }

    private function getUserData(): array
    {
        return [
            // $userData = [$firstname, $lastname, $password, $email, $roles];
            ['Axel', 'Buob', 'password', 'contact@axelbuob.fr', ['ROLE_ADMIN']],
            ['Amadou', 'Sow', 'password', 'contact@amadousow.fr', ['ROLE_USER']]
        ];
    }
}
