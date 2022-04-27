FROM node:latest

COPY test /usr/app
WORKDIR /usr/app

EXPOSE 4000
ENTRYPOINT [ "node", "server1" ]