const express = require('express');
const cors = require('cors');
const app = express();
const oneOfFour = require('./assessment');
const level = require('./levels');
const math = require('./math');
const read = require('./read');

app.use(cors());

app.get('/api/', (req, res) => {
  //res.json(level);
  res.json(oneOfFour);
});

app.get('/api/math', (req, res) => {
  //res.json(level);
  res.json(math);
});

app.get('/api/read', (req, res) => {
  //res.json(level);
  res.json(read);
});

app.get('/api/math/:subTopicNr', (req, res) => {
  const found = math.some(topic => topic.subTopicNr === parseInt(req.params.subTopicNr));

  if(found){
    res.json(math.filter(topic => topic.subTopicNr === parseInt(req.params.subTopicNr)));
  } else {
    res.status(400).json({msg: "Topic not found"});
  }
  });

app.get('/api/levels', (req, res) => {
  res.json(level);
});

app.get('/api/:levelid', (req, res) => {
  const found = oneOfFour.some(level => level.levelId === parseInt(req.params.levelid));

  if(found){
    res.json(oneOfFour.filter(level => level.levelId === parseInt(req.params.levelid)));
  } else {
    res.status(400).json({msg: "Level not found"});
  }
  });

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
