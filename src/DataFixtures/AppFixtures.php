<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use App\Entity\Post;
use App\Entity\Category;
use App\Entity\SiteConfiguration;
use App\Entity\Comment;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class AppFixtures extends Fixture
{
    public function __construct(UserPasswordHasherInterface $userPasswordHasher, SluggerInterface $slugger)
    {
        $this->userPasswordHasher = $userPasswordHasher;
        $this->slugger = $slugger;
    }

    /**
     * Load entities
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function load(ObjectManager $manager): void
    {
        $this->loadCategories($manager);
        $this->loadUsers($manager);
        $this->loadSiteConfiguration($manager);
        $this->loadPosts($manager);
        $this->loadComments($manager);
    }

    /**
     * Init categories
     *
     * @param ObjectManager $manager
     * @return void
     */
    private function loadCategories(ObjectManager $manager): void
    {
        $categories = $this->getCategoryData();
        for ($i = 0; $i < count($categories); $i++) {

            $category = new Category();
            $category->setName($categories[$i]['name']);
            $category->setSlug($categories[$i]['slug']);
            $manager->persist($category);
            $this->addReference($categories[$i]['slug'], $category);
        }
        $manager->flush();
    }

    /**
     * Init users
     *
     * @param ObjectManager $manager
     * @return void
     */
    private function loadUsers(ObjectManager $manager): void
    {
        foreach ($this->getUserData() as [$username, $firstname, $lastname, $password, $email, $roles]) {
            $user = new User();
            $user->setUsername($username);
            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setPassword($this->userPasswordHasher->hashPassword($user, $password));
            $user->setEmail($email);
            $user->setRoles($roles);
            $user->setCreatedAt(new \DateTime);
            $user->setIsVerified(true);
            $manager->persist($user);
            $this->addReference($email, $user);
        }
        $manager->flush();
    }

    /**
     * Init site configuration
     *
     * @param ObjectManager $manager
     * @return void
     */
    private function loadSiteConfiguration(ObjectManager $manager): void
    {
        $siteConfiguration = new SiteConfiguration();
        $siteConfiguration->setName('Snowtricks');
        $siteConfiguration->setDescription('Site communautaire Snowtricks');
        $siteConfiguration->setUser($this->getReference('admin@snowtricks.fr'));
        $manager->persist($siteConfiguration);
        $manager->flush();
    }
    
    /**
     * Init posts 
     *
     * @param ObjectManager $manager
     * @return void
     */
    private function loadPosts(ObjectManager $manager): void
    {
        $posts = $this->getPostData();
        for($i = 0; $i < count($posts); $i++)
        {
            $post = new Post();
            $post->setName($posts[$i]['name']);
            $post->setSlug($posts[$i]['slug']);
            $post->setDescription($posts[$i]['description']);
            $post->setUser($this->getReference('admin@snowtricks.fr'));
            if($i < 5)
            {
                $post->setCategory($this->getReference('les-grabs'));
            }
            else
            {
                $post->setCategory($this->getReference('les-rotations'));
            }
            $this->addReference($posts[$i]['slug'], $post);
            $manager->persist($post);
        }
        $manager->flush();
    }

    /**
     * Init comments
     *
     * @param ObjectManager $manager
     * @return void
     */
    private function loadComments(ObjectManager $manager): void
    {
        foreach($this->getPostData() as $post)
        {
            for($i = 0; $i <=15; $i++)
            {
                $comment = new Comment();
                $comment->setContent('Hello world!');
                $comment->setCreatedAt(new \DateTime());
                $comment->setPost($this->getReference($post['slug']));
                $comment->setUser($this->getReference('admin@snowtricks.fr'));
                $manager->persist($comment);
            }
        }
        $manager->flush();
    }

    /**
     * Return users data
     *
     * @return array
     */
    private function getUserData(): array
    {
        return [
            // $userData = [$username, $firstname, $lastname, $password, $email, $roles];
            ['jimmy', 'Jimmy', 'Sweat', 'password', 'admin@snowtricks.fr', ['ROLE_ADMIN']],
            ['john', 'John', 'user', 'password', 'johnuser@test.com', ['ROLE_USER']]
        ];
    }

    /**
     * Return posts data
     *
     * @return array
     */
    public function getPostData(): array
    {
        return [
            [ 'name' => 'Mute', 'slug' => 'mute', 'description' => 'Saisie de la carre frontside de la planche entre les deux pieds avec la main avant' ],
            [ 'name' => 'Sad', 'slug' => 'sad', 'description' => 'Saisie de la carre backside de la planche, entre les deux pieds, avec la main avant' ],
            [ 'name' => 'Indy', 'slug' => 'indy', 'description' => 'Saisie de la carre frontside de la planche, entre les deux pieds, avec la main arri??re'],
            [ 'name' => 'Stalefish', 'slug' => 'stalefish', 'description' => 'Saisie de la carre backside de la planche entre les deux pieds avec la main arri??re'],
            [ 'name' => 'Tail grab', 'slug' => 'tail-grab', 'description' => 'Saisie de la partie arri??re de la planche, avec la main arri??re'],
            [ 'name' => '180', 'slug' => '180', 'description' => 'Demi-tour, soit 180 degr??s d\'angle'],
            [ 'name' => '360', 'slug' => '360', 'description' => 'Trois six pour un tour complet'],
            [ 'name' => '540', 'slug' => '540', 'description' => 'Cinq quatre pour un tour et demi'],
            [ 'name' => '720', 'slug' => '720', 'description' => 'Sept deux pour deux tours complets'],
            [ 'name' => '900', 'slug' => '900', 'description' => 'Deux tours et demi']
            
        ];
    }

    /**
     * Return categories data
     *
     * @return array
     */
    private function getCategoryData(): array
    {
        return [
            [ 'name' => 'Les grabs', 'slug' => 'les-grabs' ],
            [ 'name' => 'Les rotations', 'slug' => 'les-rotations' ],
            [ 'name' => 'Les flips', 'slug' => 'les-flips' ],
            [ 'name' => 'Les rotations d??sax??es', 'slug' => 'les-rotations-desaxees' ],
            [ 'name' => 'Les slides', 'slug' => 'les-slides' ],
            [ 'name' => 'Les one foot tricks', 'slug' => 'les-one-foot-tricks' ],
            [ 'name' => 'Old school', 'slug' => 'old-school' ]
        ];
 
    }
}