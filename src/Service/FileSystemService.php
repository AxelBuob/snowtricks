<?php

namespace App\Service;

use Exception;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Filesystem\Filesystem;

class FileSystemService
{
    private $file_system;

    public function __construct()
    {
        $this->file_system = new Filesystem();
    }

    public function remove($file): void
    {
        try
        {

            if($this->file_system->exists($file))
            {
                if(!$this->file_system->remove($file))
                {
                    throw new FileException('Cannot remove the file');
                }
            }
            else
            {
                throw new FileException('File does not exist');
            }
        }
        catch(FileException $e)
        {
            $e->getMessage();
        }
    }

}
   