const express = require('express');

const app = express();

app.get('/', (req, res) => {

res.send('Hello World from other side');

});

module.exports = app;
