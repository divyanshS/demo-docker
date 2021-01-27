# Alpine Linux is much smaller, and thus leads to slimmer images
FROM node:alpine

COPY ./* /usr/node_server/

WORKDIR /usr/node_server
RUN npm install

CMD ["npm", "run", "start"]