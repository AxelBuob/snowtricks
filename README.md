
# snowtricks

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

## Symfony insight report
- https://insight.symfony.com/projects/06cee59b-6e5a-4266-a8e2-be595cb0258f/analyses/82

