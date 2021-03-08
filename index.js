
const express = require('express');
const app = express();

const http = require('http');

url = require('url');


let topMovies= [
  {title: 'Bladerunner',
  starring: 'Harrison Ford'},
  {title: 'Alien',
  starring: 'Sigourney Weaver'},
  {title: 'The Chronical Of Riddick',
  starring: 'Vin Diesel'}  
];

//get requests
app.get('/', (req, res) => {
    res.send('Welcome to my Movieclub');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', {root: _dirname});
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080');
});