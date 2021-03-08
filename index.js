const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.get("/", (req, res) => {
  res.send("Welcome to my MovieFlix App");
});

app.use(express.static("public"));

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: _dirname });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080");
});

// let topMovies = [
//     { title: "Bladerunner", starring: "Harrison Ford" },
//     { title: "Alien", starring: "Sigourney Weaver" },
//     { title: "The Chronical Of Riddick", starring: "Vin Diesel" },
//   ];
