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
  res.sendFile("public/documentation.html", { root: __dirname });
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
//movielist
let topMovies = [
    { title: "Bladerunner", genre: "sci-fi", director:"Ridley Scott", description:"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.", imgURL:"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    { title: "Alien", genre: "sci-fi", director:"Ridley Scott", description:"After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.", imgURL:"https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" },
    { title: "The Chronicles Of Riddick", genre: "sci-fi", director:"David Twohy", description:"The wanted criminal Richard Bruno Riddick (Vin Diesel) arrives on a planet called Helion Prime and finds himself up against an invading empire called the Necromongers, an army that plans to convert or kill all humans in the universe.", imgURL:"https://m.media-amazon.com/images/M/MV5BNzBjNmJkYjUtMTFjMC00ZWI5LWEyM2YtNzczOTczMmM1ODY5XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg" },
    { title: "The Avengers", genre: "action", director:"Joss Whedon", description:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", imgURL:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" },
    { title: "Phantasm", genre: "horror", director:"Don Coscarelli", description:"A teenage boy and his friends face off against a mysterious grave robber known only as the Tall Man, who keeps a lethal arsenal of terrible weapons with him." },
    { title: "Steel Magnolias", genre: "drama", director:"Herbert Ross", description:"A young beautician, newly arrived in a small Louisiana town, finds work at the local salon, where a small group of women share a close bond of friendship, and welcome her into the fold.", imgURL:"https://m.media-amazon.com/images/M/MV5BZTVkNWM2YjgtYjRhNC00OWQ5LWFiMDAtYWI2MTM0ZDk1ODE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg" },
    { title: "The Matrix", genre: "sci-fi", director:"The Wachowski Brothers", description:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.", imgURL:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" },
    { title: "2012", genre: "action", director:" Roland Emmerich", description:"A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.", imgURL:"https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg" },
    { title: "Unforgiven", genre: "western", director:"Clint Eastwood", description:"Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The 'Schofield Kid.'", imgURL:"https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    { title: "Se7en", genre: "mystery", director:"David Fincher", description:"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.", imgURL:"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" }
];
