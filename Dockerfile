FROM node:lts-alpine@sha256:44fce696f38ba8c987c4db89954051000bbd05ffd8d8659ba15ed4a8602e937f

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY markdown-it-gds.js .

RUN npm ci --ignore-scripts
