'use strict';

const express = require('express');

const PORT = 9092;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Working Fine\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
