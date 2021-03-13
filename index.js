//loading the modules
const express = require("express");
const app = express();
const morgan = require("morgan");

//use morgan to log common info
app.use(morgan("common"));

//load a generic message
app.get("/", (req, res) => {
  res.send("Welcome to my MovieFlix App");
});

// 1.get all movies
app.get("/topMovies", (req, res) => {
  res.json(topMovies);
  
});

//2. get a single movie's full details
app.get("/topMovies/:title", (req, res) => {
  res.json(
    topMovies.find((movie) => {
      return movie.title === req.params.title;
     }));
   });

//3. Return data about a genre (description) by title
app.get("/topMovies/:genre/:type", (req, res) => {
  res.status(201).send("The genre info you requested");
  
});

//4. Return data about a director (bio, birth year, death year) by name
app.get("/topMovies/:director/:name", (req, res) => {
  res.status(201).send("The director info you requested");
  
});

//5.Allow new users to register
app.post("/userNames/:name", (req, res) => {
     res.status(201).send("Registration successful. Welcome!");
  });

//6.Allow users to update their user info (username)
app.put("/userNames/:name", (req, res) => {
  res.status(201).send("Username updated.");
  });

//7. Allow users to add a movie to their list of favorites
app.put("/userNames/:name/:favoriteMovie", (req, res) => {
    res.status(201).send("Movie added to favorites.");
  });

//8. Allow users to remove a movie from their list of favorites
app.delete("/userNames/:name/:favoriteMovie", (req, res) => {
  res.status(201).send("The movie was deleted from your favorites.");
});

//9. Allow existing users to deregister
app.delete("/userNames/:name", (req, res) => {
  res.status(201).send("User Deleted.");
});

//summon express static on public
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

