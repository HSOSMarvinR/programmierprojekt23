# syntax=docker/dockerfile:1

FROM node:18-alpine
RUN mkdir /project
WORKDIR /project
COPY frontend/package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build --prod --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]

