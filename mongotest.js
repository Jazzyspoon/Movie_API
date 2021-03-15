

let movie0 = 
    {Title: "Bladerunner",
     Description: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
     Genre: {Name: "sci-fi", Description: "Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the 'literature of ideas', and often explores the potential consequences of scientific, social, and technological innovations."},
     Director: {Name: "Ridley Scott", Bio:"Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham).",
     Birth: "1937",
     Death: "----"},
     ImagePath: "/img/bladerunner.jpg", Featured: true}
     db.movies.insertOne(movie0)

let movie1 =    
    {Title: "Alien",
    Description:"After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
     Genre: {Name: "sci-fi", Description: "Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the 'literature of ideas', and often explores the potential consequences of scientific, social, and technological innovations."},
     Director: {Name: "Ridley Scott",
     Bio:"Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham).",
     Birth: "1937",
     Death: "----"},      
     ImagePath:"/img/alien.jpg", Featured: false}
     db.movies.insertOne(movie1)

let movie2 = {     
      Title: "The Chronicles Of Riddick",
      Description:"The wanted criminal Richard Bruno Riddick (Vin Diesel) arrives on a planet called Helion Prime and finds himself up against an invading empire called the Necromongers, an army that plans to convert or kill all humans in the universe.",
      Genre: {Name: "sci-fi", Description: "Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the 'literature of ideas', and often explores the potential consequences of scientific, social, and technological innovations."},
      Director: {Name: "David Twohy", 
      Bio: "As both writer and director, David Twohy has contributed much to the film world, helping to elevate movies in such a way that Entertainment Weekly was prompted to name him 'one of the 100 most creative people in Hollywood.'",
      Birth: "1955", Death: "----"},
      ImagePath:"/img/riddick.jpg",
      Featured: false}
      db.movies.insertOne(movie2)

let movie4 = {
      Title: "The Avengers",
      Description:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      Genre: { Name: "action", Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero (though a small number of films in this genre have ended in the victory for the villain instead). " },
      Director: {Name: "Joss Whedon",Bio:"Joss Whedon is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon.",
      Birth: "1964",Death: "----"},
      ImagePath:"img/avengers.jpg", Featured: false}
      db.movies.insertOne(movie4)

let movie5 = {
      Title: "Phantasm",
      Description:"A teenage boy and his friends face off against a mysterious grave robber known only as the Tall Man, who keeps a lethal arsenal of terrible weapons with him.",
      Genre: {Name: "horror", Description: "A horror film is one that seeks to elicit fear in its audience for entertainment purposes. Horror films additionally aim to evoke viewers' nightmares, fears, revulsions and terror of the unknown or the macabre. Initially inspired by literature from authors such as Edgar Allan Poe, Bram Stoker, and Mary Shelley, horror has existed as a film genre for more than a century. Horror may also overlap with the fantasy, supernatural fiction, and thriller genres."},
      Director: {Name: "Don Coscarelli",
      Bio: "In much the same way that director George A. Romero creative output has been primarily centered around the highly successful 'Dead' series of zombie films, then fellow fantasy director Don Coscarelli has for over two decades seen his universe swirling around the lesser successful, but equally cult, and much loved 'Phantasm' series of horror movies.",
      Birth: "1964", Death: "----"},
      ImagePath: "/img/phantasm.jpg", Featured: false}
        db.movies.insertOne(movie5)

let movie11 = {
      Title: "Steel Magnolias",
      Description:
        "A young beautician, newly arrived in a small Louisiana town, finds work at the local salon, where a small group of women share a close bond of friendship, and welcome her into the fold.",
      Genre: {Name: "drama", description: "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.[1] Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera (operatic drama), police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy). These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods."},
      Director: {Name: "Herbert Ross",
      Bio:"Herbert Ross was born on May 13, 1927 in Brooklyn, New York City, New York, USA as Herbert David Ross. He is known for his work on The Turning Point (1977), The Goodbye Girl (1977) and Goodbye, Mr. Chips (1969). He was married to Lee Radziwill and Nora Kaye. He died on October 9, 2001 in New York City.",
      Birth: "1964", Death: "2001"},
      ImagePath: "/img/steel.jpg", Featured: false}
      db.movies.insertOne(movie11)
    
 let movie7 = {
      Title: "The Matrix",
      Description:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      Genre: {Name: "sci-fi", Description: "Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the 'literature of ideas', and often explores the potential consequences of scientific, social, and technological innovations."},
      Director: {Name: "The Wachowski Brothers",
      Bio: "Lana Wachowski and her sister Lilly Wachowski, also known as the Wachowskis, are the duo behind such ground-breaking movies as The Matrix (1999) and Cloud Atlas (2012). Born to mother Lynne, a nurse, and father Ron, a businessman of Polish descent, Wachowski grew up in Chicago and formed a tight creative relationship with her sister Lilly",
      Birth: "1964",
      Death: "----"},
      ImagePath:"/img/matrix.jpg", Featured: false}
      db.movies.insertOne(movie7)

let movie8 = {
      Title: "2012",
      Description:"A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.",
      Genre: { Name: "action", Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero (though a small number of films in this genre have ended in the victory for the villain instead). "},
      Director: {Name: " Roland Emmerich",
      Bio:"Roland Emmerich is a German film director and producer of blockbuster films like The Day After Tomorrow (2004), Godzilla (1998), Independence Day (1996) and The Patriot (2000). Before fame, he originally wanted to be a production designer, but decided to be a director, after watching the original Star Wars: Episode IV - A New Hope (1977).",
      Birth: "1964",
      Death: "----"},
      ImagePath:"/img/2012.jpg", Featured: false}
      db.movies.insertOne(movie8)
   
let movie9 = {
      Title: "Unforgiven",
      Description:"Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The 'Schofield Kid.'",
      Genre: {Name: "western", Description: "The American Film Institute defines Western films as those 'set in the American West that [embody] the spirit, the struggle, and the demise of the new frontier.'[7] The term 'Western', used to describe a narrative film genre, appears to have originated with a July 1912 article in Motion Picture World magazine.[8] Most of the characteristics of Western films were part of 19th-century popular western fiction, and were firmly in place before film became a popular art form."},
      Director: {Name: "Clint Eastwood",
      Bio:"Clint Eastwood is a highly succesful, award winner actor, director, and screenwriter whose career spans 6 decades and numerous film genres.",
      Birth: "1964",
      Death: "----"},
      ImagePath:"/img/unforgiven.jpg", Featured: false}
      db.movies.insertOne(movie9)

let movie10 = {
      Title: "Se7en",
      Description:"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      Genre: {Name: "mystery", Description: "Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety. Successful examples of thrillers are the films of Alfred Hitchcock."},
      Director:  {Name: "David Fincher",
      Bio:"David Fincher was born in 1962 in Denver, Colorado, and was raised in Marin County, California. When he was 18 years old he went to work for John Korty at Korty Films in Mill Valley. He subsequently worked at ILM (Industrial Light and Magic) from 1981-1983.",
      Birth: "1964",
      Death: "----"},
      ImagePath:"/img/seven.jpg",Featured: false}
      db.movies.insertOne(movie10)


 
  
    let user1 = {
        Username: "JohnnyD",
        Email: "JD@gmail.com",
        Password: 'test123',
        Birthday: new Date ("1988-09-10"),
        Favoritemovies: [{_id: ObjectId("604d4df20b9cec5678342b2")}, {_id: ObjectId("604d54350b9cec5678c342b8")}]}
      db.users.insertOne(user1)

      let user2 =
      { Username: "SteveO12",
        Email: "SD@gmail.com",
        Password: "bum324",
        Birthday: new Date ("1986-04-02"),
        Favoritemovies: [{ObjectId("604d555a0b9cec5678342ba"), ObjectId("604d54350b9cec5678c342b8")}]}
        db.users.insertOne(user2)
     
     let user3 = 
      { Username: "JaneAmp2",
       Email: "JA@gmail.com",
       Password: "fd98df",
       Birthday: new Date("2000-11-18"),
       Favoritemovies: [{ObjectId("604d555a0b9cec5678342ba")}]}
       db.users.insertOne(user3)

    let user4 =   
      { Username: "Max11",
        Email: "mucher@hotmail.com",
        Password: "fghhb5",
        Birthday: new Date("2006-07-27"),
        Favoritemovies: [{ObjectId("604d54350b9cec5678c342b8")}]}
        db.users.insertOne(user4)

      let user5 =   
      { Username: "JulianM",
        Email: "trublu@gmail.com",
        Password: "fg65dFs",
        Birthday: new Date("1997-09-03"),
        Favoritemovies: [{ObjectId("6404d4f590b9cec5678c342b3"), ObjectId("604d4df20b9cec5678342b2")}]}
        db.users.insertOne(user5)
    