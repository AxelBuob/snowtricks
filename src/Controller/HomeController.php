<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\CommentRepository;
use App\Repository\PostRepository;

use App\Entity\Post;
use App\Entity\SiteConfiguration;
use App\Repository\ImageRepository;
use App\Repository\SiteConfigurationRepository;

class HomeController extends AbstractController
{

    public function __construct(SiteConfigurationRepository $siteConfigurationRepository)
    {
        $this->siteConfigurationRepository = $siteConfigurationRepository;
    }

    #[
        Route('/', defaults: ['page' => '1'], methods: ['GET'], name: 'post_index')
    ]
    public function index(int $page, PostRepository $postRepository): Response
    {
        $posts = $postRepository->findLatest($page);

        return $this->render('post/index.html.twig', [
            'posts' => $posts,
            'paginator' => json_encode([
                'numResults' => $posts->getNumResults(),
                'pageSize' => $posts->getPageSize(),
                'currentPage' => $posts->getCurrentPage(),
                'hasNextPage' => $posts->hasNextPage()
            ])
        ]);
    }

    #[
        Route('/page/{page}',methods: ['GET'], name: 'post_index_more', requirements: ['page' => '\d+'])
    ]
    public function loadMorePosts(PostRepository $postRepository, $page = 5)
    {
        $posts = $postRepository->findLatest($page);

        return $this->render('post/_list_posts.html.twig', [
            'posts' => $posts
        ]);
    }


    #[
        Route('/figure/{slug}', defaults: ['page' => '1'],  methods: ['GET'], name: 'post_show', requirements: ['slug' => "[a-z0-9\-]*"])
    ]
    public function show(Post $post, int $page, CommentRepository $commentRepository, ImageRepository $imageRepository): Response
    {
        if (!$post) {
            throw $this->createNotFoundException('Cette figure n\'éxiste pas');
        }

        $comments = $commentRepository->findLatest($post->getId(), $page);
        
        $featured_image = $imageRepository->findFeaturedImage($post);
        if($featured_image)
        {
            $featured_image = $featured_image['0'];
        } else {
            $featured_image = null;
        }


        return $this->render('post/show.html.twig', [
            'post' => $post,
            'comments' => $comments,
            'featured_image' => $featured_image,
            'paginator' => json_encode([
                'numResults' => $comments->getNumResults(),
                'pageSize' => $comments->getPageSize(),
                'currentPage' => $comments->getCurrentPage(),
                'hasNextPage' => $comments->hasNextPage()
            ])
        ]);
    }

    #[
        Route('/figure/{slug}/page/{page}', methods: ['GET'], name: 'post_show_more', requirements: ['slug' => "[a-z0-9\-]*", 'page' => "[1-9]\d*"]),
    ]
    public function loadMoreComments(Post $post, CommentRepository $commentRepository, $page = 5)
    {
        $comments = $commentRepository->findLatest($post->getId(), $page);
        return $this->render('post/_list_comments.html.twig', [
            'comments' => $comments
        ]);
    }

    private function getSiteConfiguration(): SiteConfiguration
    {
        return $this->siteConfigurationRepository->getSiteConfiguration();
    }

    public function getHeader()
    {
        return $this->render('header.html.twig', [
            'site' => $this->getSiteConfiguration()
        ]);
    }

    public function getFooter()
    {
        return $this->render('footer.html.twig', [
            'site' => $this->getSiteConfiguration()
        ]);
    }

}
