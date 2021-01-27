# alpine Linux is much smaller, and thus leads to slimmer images
FROM node:alpine

# change working directory inside docker
# inside docker it works similar to: mkdir -p /usr/node_server; cd /usr/node_server;
WORKDIR /usr/node_server

# copy package.json separately to leverage cache in case of code changes w/o any dependency change
COPY ./package.json ./
RUN npm install

# copy all data from the folder EXCEPT dockerfile
COPY ./* ./

# run this command when the container starts
CMD ["npm", "run", "start"]