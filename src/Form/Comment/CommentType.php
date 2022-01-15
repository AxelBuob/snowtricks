<?php

namespace App\Form\Comment;

use App\Entity\Comment;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Length;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextareaType::class, [
                'label' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre commentaire ne peut pas être vide',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Votre mot de passe doit contenir au minimum {{ limit }} caractères',
                        'max' => 255,
                        'maxMessage' => 'Votre mot de passe peut contenir au aximum {{ limit }} caractères'
                    ])
                ]
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Laisser un commentaire'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}
