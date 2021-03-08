//loading the modules
const express = require("express");
const app = express();
const morgan = require("morgan");

//use morgan to log common info
app.use(morgan("common"));

//get /movies
app.get("/movies", (req, res) => {
  res.json(topMovies);
});

//load a generic message 
app.get("/", (req, res) => {
  res.send("Welcome to my MovieFlix App");
});

//summon express staic on public 
app.use(express.static("public"));

//access documentation using express static
app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: _dirname });
});

//error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// log listening on 8080
app.listen(8080, () => {
  console.log("Your app is listening on port 8080");
});

// let topMovies = [
//     { title: "Bladerunner", starring: "Harrison Ford" },
//     { title: "Alien", starring: "Sigourney Weaver" },
//     { title: "The Chronical Of Riddick", starring: "Vin Diesel" },
//   ];
