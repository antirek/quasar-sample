const express = require('express');
const config = require('config');
const cors = require('cors');
// const quasarServe = require('./quasar-serve');
const quasarServe = require('quasar-serve');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors())

app.use(quasarServe({
  distPath: path.join(__dirname, './../client/dist/spa'),
  replaces: {
    baseUrl: config.baseUrl,
  },
}));

app.listen(config.port, () => {
  console.log('started', config);
});
