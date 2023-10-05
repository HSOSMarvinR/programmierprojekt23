# syntax=docker/dockerfile:1

FROM node:18-alpine as build

WORKDIR /app
COPY package*.json .

RUN npm install
COPY . .
RUN npm run prod

FROM nginx:1.19
RUN apt-get update && apt-get install -y npm
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html


