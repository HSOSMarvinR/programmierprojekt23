# syntax=docker/dockerfile:1

FROM node:18-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]

