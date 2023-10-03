# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /src/app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build --prod --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]
