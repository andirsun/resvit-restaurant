FROM node:latest
RUN mkdir /src
RUN npm install nodemon -g
WORKDIR /src
ADD Backend/package.json /src/package.json
RUN npm install
ADD Backend/nodemon.json /src/nodemon.json
EXPOSE 3000
CMD nodemon server/server.js