<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\User;
use App\Entity\Post;
use App\Entity\Category;
use App\Entity\Image;
use App\Entity\SiteConfiguration;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class AppFixtures extends Fixture
{

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $this->loadImages($manager);
        $this->loadUsers($manager);
        $this->loadSiteConfiguration($manager);
        $this->loadCategories($manager);
        $this->loadPosts($manager);
    }

    private function loadImages(Objectmanager $manager): void
    {
        $images = [
            [ 'logo', 'logo.png' ],
            [ 'post', 'post.png' ],
            [ 'admin', 'admin.png' ],
            [ 'user', 'user.png' ]
        ];

        foreach($images as [$key, $name])
        {
            $image = new Image();
            $image->setName($name);
            if($key === 'post')
            {
                $image->setFeatured(true);
            }
            $manager->persist($image);
            $this->addReference($name, $image);
        }
        $manager->flush();
    }

    private function loadUsers(ObjectManager $manager): void
    {
        foreach ($this->getUserData() as [$firstname, $lastname, $password, $email, $roles]) {
            $user = new User();
            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setPassword($this->userPasswordHasher->hashPassword($user, $password));
            $user->setEmail($email);
            $user->setRoles($roles);
            $user->setCreatedAt(new \DateTime);
            $user->setIsVerified(true);
            if($firstname === 'Jimmy')
            {
                $user->setImage($this->getReference('admin.png'));  
            }
            else
            {
                $user->setImage($this->getReference('user.png'));
            }
            $manager->persist($user);
            $this->addReference($email, $user);
        }
        $manager->flush();

    }

    private function loadSiteConfiguration(ObjectManager $manager): void
    {
        $siteConfiguration = new SiteConfiguration();
        $siteConfiguration->setName('Snowtricks');
        $siteConfiguration->setDescription('Site communautaire Snowtricks');
        $siteConfiguration->setAuthor($this->getReference('admin@snowtricks.fr'));
        $siteConfiguration->setImage($this->getReference('logo.png'));
        $manager->persist($siteConfiguration);
        $manager->flush();
    }
    
    private function loadCategories(ObjectManager $manager): void
    {
        $categories = $this->getCategoryData();

        for ($i = 0; $i < count($categories); $i++)
        {

            $category = new Category();
            $category->setName($categories[$i]['name']);
            $category->setSlug($categories[$i]['slug']);
            $manager->persist($category);
            $this->addReference($categories[$i]['slug'], $category);
        }
        
       $manager->flush();
    }

    private function loadPosts(ObjectManager $manager): void
    {
        $posts = $this->getPostData();

        for($i = 0; $i < count($posts); $i++)
        {
            $post = new Post();
            $post->setName($posts[$i]['name']);
            $post->setSlug($this->slugger->slug($posts[$i]['name']));
            $post->setDescription($posts[$i]['description']);
            $post->setAuthor($this->getReference('admin@snowtricks.fr'));
            $post->addImage($this->getReference('post.png'));
            if($i < 5)
            {
                $post->setCategory($this->getReference('les-grabs'));
            }
            else
            {
                $post->setCategory($this->getReference('les-rotations'));
            }
            $manager->persist($post);
        }

        $manager->flush();
    }

    private function getUserData(): array
    {
        return [
            // $userData = [$firstname, $lastname, $password, $email, $roles];
            ['Jimmy', 'Sweat', 'password', 'admin@snowtricks.fr', ['ROLE_ADMIN']],
            ['John', 'user', 'password', 'johnuser@test.com', ['ROLE_USER']]
        ];
    }

    public function getPostData(): array
    {
        return [
            [ 'name' => 'Mute', 'description' => 'Saisie de la carre frontside de la planche entre les deux pieds avec la main avant' ],
            [ 'name' => 'Sad', 'description' => 'Saisie de la carre backside de la planche, entre les deux pieds, avec la main avant' ],
            [ 'name' => 'Indy', 'description' => 'Saisie de la carre frontside de la planche, entre les deux pieds, avec la main arrière'],
            [ 'name' => 'Stalefish', 'description' => 'Saisie de la carre backside de la planche entre les deux pieds avec la main arrière'],
            [ 'name' => 'Tail grab', 'description' => 'Saisie de la partie arrière de la planche, avec la main arrière'],
            [ 'name' => '180', 'description' => 'Demi-tour, soit 180 degrés d\'angle'],
            [ 'name' => '360', 'description' => 'Trois six pour un tour complet'],
            [ 'name' => '540', 'description' => 'Cinq quatre pour un tour et demi'],
            [ 'name' => '720', 'description' => 'Sept deux pour deux tours complets'],
            [ 'name' => '900', 'description' => 'Deux tours et demi']
            
        ];
    }

    private function getCategoryData(): array
    {

        return [
            [ 'name' => 'Les grabs', 'slug' => 'les-grabs' ],
            [ 'name' => 'Les rotations', 'slug' => 'les-rotations' ],
            [ 'name' => 'Les flips', 'slug' => 'les-flips' ],
            [ 'name' => 'Les rotations désaxées', 'slug' => 'les-rotations-desaxees' ],
            [ 'name' => 'Les slides', 'slug' => 'les-slides' ],
            [ 'name' => 'Les one foot tricks', 'slug' => 'les-one-foot-tricks' ],
            [ 'name' => 'Old school', 'slug' => 'old-school' ]
        ];
 
    }
}