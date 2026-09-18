FROM node:lts-alpine@sha256:ebfe2f90462722a7a4de65e91990e97fe0d401c70e0e762c5b53302f905ec1c1

WORKDIR /app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY markdown-it-gds.js ./markdown-it-gds.js

RUN yarn install --frozen-lockfile --ignore-scripts