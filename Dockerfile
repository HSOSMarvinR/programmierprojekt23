# Verwende das offizielle Node-Image mit der Version 18 auf Alpine als Build-Stage
FROM node:18-alpine as build

# Setze das Arbeitsverzeichnis auf /app
WORKDIR /app

# Kopiere die package.json und package-lock.json Dateien in das Arbeitsverzeichnis
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den restlichen Projektcode in das Arbeitsverzeichnis
COPY . .

# Baue die Anwendung im Produktionsmodus
RUN npm run prod

# Verwende das offizielle Nginx-Image mit der Version 1.19 als Basis-Image
FROM nginx:1.19

# Aktualisiere die Paketliste und installiere npm
RUN apt-get update && apt-get install -y npm

# Kopiere die nginx-Konfiguration in den Container
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Kopiere die kompilierte Anwendung aus der Build-Stage in das Verzeichnis des Nginx-Webservers
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html
