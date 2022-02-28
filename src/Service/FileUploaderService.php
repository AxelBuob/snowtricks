<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
use App\Entity\Image;
use Symfony\Component\Filesystem\Filesystem;

class FileUploaderService
{
    public function __construct()
    {
        $this->file_system = new Filesystem();
    }

    /**
     * Upload a file on the server
     *
     * @param UploadedFile $file
     * @param [type] $targetDirectory
     * @param SluggerInterface $slugger
     * @return void
     */
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
            return $e->getMessage();
        }

        return $image;
    }

    /**
     * Remove a file from on the server
     *
     * @param [type] $file
     * @return void
     */
    public function remove($file): void
    {
        try {
            if ($this->file_system->exists($file)) {
                if (!$this->file_system->remove($file)) {
                    throw new FileException('Cannot remove the file');
                }
            } else {
                throw new FileException('File does not exist');
            }
        } catch (FileException $e) {
            $e->getMessage();
        }
    }
}
