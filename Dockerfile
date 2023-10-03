# syntax=docker/dockerfile:1

FROM node:18-alpine
RUN mkdir /project
WORKDIR /project
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build --prod --legacy-peer-deps
ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]

