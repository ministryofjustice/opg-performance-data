FROM node:lts-alpine@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY markdown-it-gds.js .

RUN npm ci --ignore-scripts
