FROM node:lts-alpine@sha256:50c8e8ca1d27439048670df5883f32d57cf81cff6233222c893fd0d9884cbd81

WORKDIR /app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY markdown-it-gds.js ./markdown-it-gds.js

RUN yarn install --frozen-lockfile --ignore-scripts