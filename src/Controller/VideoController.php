<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Post;
use App\Entity\Video;

class VideoController extends AbstractController
{
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function add(Post $post, Video $video)
    {
        $video->setPost($post);
        $video->setOwner($this->getUser());
        $this->entityManager->persist($video);
        $this->entityManager->flush();
    }

    public function delete(Video $video)
    {
        $this->denyAccessUnlessGranted('EDIT', $video);
        $video->getPost()->removeVideo($video);
        $video->setPost(null);
        $this->entityManager->persist($video);
        $this->entityManager->remove($video);
        $this->entityManager->flush();
    }
}
