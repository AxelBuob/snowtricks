<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Post;
use App\Entity\Video;

/**
 * Videos management
 */
class VideoController extends AbstractController
{
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Insert a video in database
     *
     * @param Post $post
     * @param Video $video
     * @return void
     */
    public function add(Post $post, Video $video)
    {
        $video->setPost($post);
        $video->setOwner($this->getUser());
        $this->entityManager->persist($video);
    }

    /**
     * Remove a video from database
     *
     * @param Post $post
     * @param Video $video
     * @return void
     */
    public function delete(Post $post, Video $video)
    {
        $this->denyAccessUnlessGranted('EDIT', $video);
        if (false === $post->getVideos()->contains($video)) {
            $video->getPost()->removeVideo($video);
            $video->setPost(null);
            $this->entityManager->persist($video);
            $this->entityManager->remove($video);
        }
    }
}
