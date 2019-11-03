FROM node:lts-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

EXPOSE 5000

RUN npm install

CMD [ "npm","start" ]

