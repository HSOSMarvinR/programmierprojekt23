const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});


// Hier muss irgendwie eingestellt werden, dass nicht nur die index.html angezeigt wird sondern auch der ganze Stuff aus dem src-Ordner.