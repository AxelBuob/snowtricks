
# Développez de A à Z le site communautaire SnowTricks
## Description du besoin

Vous êtes chargé de développer le site répondant aux besoins de Jimmy. Vous devez ainsi implémenter les fonctionnalités suivantes : 

- un annuaire des figures de snowboard. Vous pouvez vous inspirer de la liste des figures sur Wikipédia. Contentez-vous d'intégrer 10 figures, le reste sera saisi par les internautes ;
- la gestion des figures (création, modification, consultation) ;
- un espace de discussion commun à toutes les figures.
Pour implémenter ces fonctionnalités, vous devez créer les pages suivantes :

- la page d’accueil où figurera la liste des figures ; 
- la page de création d'une nouvelle figure ;
- la page de modification d'une figure ;
- la page de présentation d’une figure (contenant l’espace de discussion commun autour d’une figure).


## Run Locally

Clone the project

```zsh
  git clone https://github.com/AxelBuob/snowtricks.git
  cd my-project
```

Dependencies management

```bash
    composer install
```

Environment variables configuration

```bash
    // .env or .env.local
    - DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7
```

Create database
```bash
  php/bin console doctrine:database:create
  php/bin console doctrine:migrations:migrate
  php/bin console doctrine:fixtures:load
```

Start the server

```bash
  php/bin console server:start
```

Assets management
```bash
  yarn dev
```

## Authors

- [@AxelBuob](https://www.github.com/AxelBuob)

