FROM node:lts-alpine@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf

WORKDIR /app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY markdown-it-gds.js ./markdown-it-gds.js

RUN yarn install --frozen-lockfile --ignore-scripts