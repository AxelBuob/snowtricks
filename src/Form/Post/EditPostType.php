<?php

namespace App\Form\Post;

use App\Entity\Post;
use App\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Validator\Constraints\File;

class EditPostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner un titre.',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Le titre doit contenir au minimum {{ limit }} caractères.',
                        'max' => 255,
                        'maxMessage' => 'Le titre doit contenir au maximum {{ limit }} caractères.'
                    ])
                ]
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une description.',
                    ]),
                    new Length([
                        'min' => 10,
                        'minMessage' => 'La description doit contenir au minimum {{ limit }} caractères.',
                        'max' => 255,
                        'maxMessage' => 'La description doit contenir au maximum {{ limit }} caractères.'
                    ])
                ]
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name'

            ])
            ->add('images', FileType::class, [
                'label' => 'Ajouter des images',
                'multiple' => true,
                'mapped' => false,
                'required' => false
            ])
            ->add('video', UrlType::class, [
                'label' => 'Ajouter des vidéos',
                'mapped' => false,
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }
}
