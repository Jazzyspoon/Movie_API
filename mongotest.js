let topMovies = [
    { 
      Title: "Bladerunner",
      Description:
      "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      Genre: {
        Name: "sci-fi",
        Description: "a film with a futuristic theme",
      },
      Director: {
        Name: "Ridley_Scott",
        Bio:
          "Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham).",
        Birth: "1937",
        death: "    ",
      },
      ImagePath:
        "/img/bladerunner.jpg",
     Featured: true   
    }
    db.movies.insertOne(movie2)
    ,
    {
      title: "Alien",
      genre: {
        type: "sci-fi",
        description: "a film with a futuristic theme",
      },
      director: {
        name: "Ridley_Scott",
        bio:
          "Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham).",
        birthyear: 1937,
        deathyear: "alive",
      },
      description:
        "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "The Chronicles Of Riddick",
      genre: {
        type: "sci-fi",
        description: "a film with a futuristic theme",
      },
      director: {
        name: "David Twohy",
        bio:
          "As both writer and director, David Twohy has contributed much to the film world, helping to elevate movies in such a way that Entertainment Weekly was prompted to name him 'one of the 100 most creative people in Hollywood.'",
        birthyear: 1955,
        deathyear: "alive",
      },
      description:
        "The wanted criminal Richard Bruno Riddick (Vin Diesel) arrives on a planet called Helion Prime and finds himself up against an invading empire called the Necromongers, an army that plans to convert or kill all humans in the universe.",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BNzBjNmJkYjUtMTFjMC00ZWI5LWEyM2YtNzczOTczMmM1ODY5XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "The Avengers",
      genre: { type: "action", description: "an energetic, viceral film" },
      director: {
        name: "Joss Whedon",
        bio:
          "Joss Whedon is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
        birthyear: 1964,
        deathyear: "alive",
      },
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "Phantasm",
      genre: { type: "horror", description: "a scary or disturbing movie" },
      director: {
        name: "Don Coscarelli",
        bio:
          "Don Coscarelli is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
        birthyear: 1964,
        deathyear: "alive",
      },
      description:
        "A teenage boy and his friends face off against a mysterious grave robber known only as the Tall Man, who keeps a lethal arsenal of terrible weapons with him.",
    },
    {
      title: "Steel Magnolias",
      genre: { type: "drama", description: "an emotional movie" },
      director: {
        name: "Herbert Ross",
        bio:
          "Herbert Ross is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
        birthyear: 1964,
        deathyear: "alive",
      },
      description:
        "A young beautician, newly arrived in a small Louisiana town, finds work at the local salon, where a small group of women share a close bond of friendship, and welcome her into the fold.",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BZTVkNWM2YjgtYjRhNC00OWQ5LWFiMDAtYWI2MTM0ZDk1ODE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "The Matrix",
      genre: {
        type: "sci-fi",
        description: "a film with a futuristic theme",
      },
      director: {
        name: "The Wachowski Brothers",
        bio:
          "The Wachowski Brothers, the middle of five brothers, were successful television writers.",
        birthyear: 1964,
        deathyear: "alive",
      },
      description:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "2012",
      genre: { type: "action", description: "an energetic, viceral film" },
      director: {
        name: " Roland Emmerich",
        bio:
          "Roland Emmirich is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
        birthyear: 1964,
        deathyear: "alive",
      },
      description:
        "A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "Unforgiven",
      genre: {
        type: "western",
        description: "a film set in the pioneer days of American history",
      },
      director: {
        name: "Clint Eastwood",
        bio:
          "Clint Eastwood is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
        birthyear: 1964,
        deathyear: "alive",
      },
      description:
        "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The 'Schofield Kid.'",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "Se7en",
      genre: {
        type: "mystery",
        description: "a suspenseful film full of twists and surprises",
      },
      director:  {
        name: "David Fincher",
        bio:
          "David Fincher is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
        birthyear: 1964,
        deathyear: "alive",
      },
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
  ];
  
  let userNames = [
    { name: "JohnDare", email: "JD@gmail.com", favoriteMovie: " " },
    { name: "SteveDyson", email: "SD@gmail.com", favoriteMovie: " " },
    { name: "JaneAmp", email: "JA@gmail.com", favoriteMovie: " " }
  ];
  app.get("/userNames", (req, res) => {
    res.json(userNames);
  });
  