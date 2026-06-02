FROM node:lts-alpine@sha256:2bdb65ed1dab192432bc31c95f94155ca5ad7fc1392fb7eb7526ab682fa5bf14

WORKDIR /app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY markdown-it-gds.js ./markdown-it-gds.js

RUN yarn install --frozen-lockfile --ignore-scripts