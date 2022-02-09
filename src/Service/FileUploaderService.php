<?php

namespace App\Service;

use Laminas\Code\Generator\DocBlock\Tag;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
use App\Entity\Image;

class FileUploaderService
{

    public function upload(UploadedFile $file, $targetDirectory, SluggerInterface $slugger)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $slugger->slug($originalFilename);
        $filename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

        try {
            $file->move($targetDirectory, $filename);
            $image = new Image();
            $image->setName($filename);
        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
        }

        return $image;
    }


}