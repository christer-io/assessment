const express = require('express');
const path = require('path');
//const members = require('./Members');

const app = express();

const names = [
{
  "id" : 23,
  "name": "Christer"
},
{
  "id" : 24,
  "name": "Emma"
}
]




// Homepage Route
app.get('/', (req, res) => {
  res.send('hello world');
});

// Homepage Route
app.get('/api/', (req, res) => {
  res.json(names);
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
