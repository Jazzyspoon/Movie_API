/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const app = express();
morgan = require('morgan');
const http = require("http");
url = require("url");

let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(morgan('common'));
app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = "Welcome to my Movie app!";
  responseText += "<small>Requested at: " + req.requestTime + "</small>";
  res.send(responseText);
});

app.get("/secreturl", (req, res) => {
  res.send("This is a secret url with super top-secret content.");
});

let topMovies = [
  { title: "Bladerunner", starring: "Harrison Ford" },
  { title: "Alien", starring: "Sigourney Weaver" },
  { title: "The Chronical Of Riddick", starring: "Vin Diesel" },
];

//get requests
app.get("/", (req, res) => {
  res.send("Welcome to my Movieclub");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: _dirname });
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080");
});
