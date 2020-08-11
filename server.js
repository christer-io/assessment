const express = require('express');
const app = express();
const oneOfFour = require('./assessment');

app.get('/', (req, res) => {
  res.json(oneOfFour);
});

app.get('/:levelid', (req, res) => {
  res.json(oneOfFour.filter(level => level.LevelId === parseInt(req.params.levelid)));
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
