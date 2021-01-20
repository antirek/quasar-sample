const express = require('express');
const config = require('config');
const path = require('path');
const favicon = require('serve-favicon')
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  const file = fs.readFileSync(path.join(__dirname, './../client/dist/spa/index.html'));
  const ready = file.toString().replace(new RegExp('{{baseUrl}}', 'g'), config.baseUrl);
  res.send(ready);
})

app.get('/js/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/spa/js/', req.params.filename));
})

app.get('/css/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/spa/css/', req.params.filename));
})

app.get('/fonts/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/spa/fonts', req.params.filename));
});

app.get('/img/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/spa/img', req.params.filename));
});

app.get('/icons/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/spa/icons', req.params.filename));
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/spa/favicon.ico'));
});


app.listen(config.port, () => {
  console.log('started', config);
});
