# syntax=docker/dockerfile:1

FROM node:18-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm ci --legacy-peer-deps
RUN npm run build --prod --legacy-peer-deps
EXPOSE 8080
CMD ["npm", "start"]

