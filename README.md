# demo-docker

A quick guide and demo around how to setup your docker using a node app.

### Prerequisites:
- Docker, install from [here](https://docs.docker.com/engine/install/)
- Node, install from [here](https://nodejs.org/en/download/)

### Steps:
1. Clone the repo | `https://github.com/divyanshS/demo-docker.git`
1. `cd demo-docker/src`
1. `docker build -t simplewebapp .`
1. `docker run simplewebapp`
1. Go to the link with the ip-address (localhost wont't work, explained below). This ip-address is container's IP, not your machine IP.

### Explaination:
```
# Using alpine linux as a base image. It is much smaller, and thus leads to slimmer images.
# You can always go for full fledged images.
FROM node:alpine

# This command is used for setting or changing working directory inside docker, default is "/"
# Inside docker this command would work similar to: mkdir -p /usr/node_server; cd /usr/node_server;
WORKDIR /usr/node_server

# This command is used to copy files/folders into the docker FS => COPY FROM-PATH TO-PATH
# FROM-PATH  should always be relative to dockerfile
# We are copying package.json separately so that docker uses cache when dependencies are untouched
COPY ./package.json ./

# Use this statement to execute a command inside docker => RUN <my-command-with-args>
RUN npm install

# This copies all data from current folder to /usr/node_server inside docker
COPY ./* ./

# This command is executed as the default container startup command
CMD ["npm", "run", "start"]
```

Docker works in its own world, within its own environment, and that's why when you tried going on to http://localhost:8080 it failed. The app is running on a port 8080, but inside docker, not on the physical machine's port 8080. To solve this:
- Do a port mapping/forwarding with docker: `docker run -p 8080:8080 simplewebapp`
- This mapping can be explained as `SRC:DEST` => Forward requests coming on localhost port 8080 to docker's port 8080.
