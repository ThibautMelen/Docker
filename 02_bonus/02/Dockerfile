#FROM node

#MAINTAINER thmelen <thmelen@student.42.fr>

#WORKDIR /app

#ADD package.json /app

#RUN npm install

#COPY . /app

#EXPOSE 8081

#ENTRYPOINT node index.js


FROM node:7
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8081
CMD node index.js

