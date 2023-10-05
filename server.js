const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

app.use(express.static("dist/programmierprojekt23"));

app.get('/*', (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

app.listen(8080);