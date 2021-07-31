# Installation of the application

## Installing dependencies

1. [Docker](https://docs.docker.com/engine/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)
3. [Node Js](https://nodejs.org/en/download/)
4. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

<hr>

## Setting up the development frontend server locally

```bash
git clone https://github.com/rohitjakhar/daily-dairy

cd next-and-chakra

npm i

npm run dev
```

<hr>

## Using Docker 🐳

Enable the Docker Swarm mode.

```bash
docker swarm init
```

Building the docker images.

```bash
docker-compose build
```

Deploying the docker stack.

```bash
docker stack deploy -c docker-compose.yml app
```

To remove the docker stack use this command

```bash
docker stack rm app
```
