const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

// Nutze den "body-parser" Middleware für das Parsen von Anfragedaten
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Stelle den statischen Inhalt im "dist/programmierprojekt23" Verzeichnis bereit
app.use(express.static("dist/programmierprojekt23"));

// Behandle alle Anfragen mit einer Weiterleitung zur Wurzel-URL "/"
app.get('/*', (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 8080;

// Starte den Server und lasse ihn auf dem angegebenen Port lauschen
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
