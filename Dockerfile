FROM node:lts-alpine@sha256:06d7adf3e0ef61a13f1d28682726366f97a15aa1888c934d3ecec86c33918b53

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY markdown-it-gds.js .

RUN npm ci --ignore-scripts
