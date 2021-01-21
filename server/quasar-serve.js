const express = require('express');
const path = require('path');
const fs = require('fs');

const quasarServe = (options) => {
  const distPath = options.distPath || './../client/dist/';
  const replaces = options.replaces;

  const router = express.Router();

  router.get('/', (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, distPath, 'index.html'));
    let ready;
    if (replaces && replaces.baseUrl) {
      ready = file.toString().replace(new RegExp('{{baseUrl}}', 'g'), replaces.baseUrl);
    }
    res.send(ready);
  })

  router.get('/js/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, distPath, '/js/', req.params.filename));
  })

  router.get('/css/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, distPath, '/css/', req.params.filename));
  })

  router.get('/fonts/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, distPath, '/fonts/', req.params.filename));
  });

  router.get('/img/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, distPath, '/img/', req.params.filename));
  });

  router.get('/icons/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, distPath, '/icons/', req.params.filename));
  });

  router.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, distPath, '/favicon.ico'));
  });

  return router;
}

module.exports = quasarServe;