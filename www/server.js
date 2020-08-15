const express = require('express');
const app = express();
const oneOfFour = require('./assessment');
const level = require('./levels');

app.get('/api/', (req, res) => {
  //res.json(level);
  res.json(oneOfFour);
});

app.get('/api/levels', (req, res) => {
  res.json(level);
});

app.get('/api/:levelid', (req, res) => {
  res.json(oneOfFour.filter(level => level.levelId === parseInt(req.params.levelid)));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});