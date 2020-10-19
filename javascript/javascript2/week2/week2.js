


//----------Doubling of number--------------------//


//---------filter-----------//


const number = [1,2,3,4];
let newNumber = number;
const odd = number.filter(num => num % 2 !== 0) .map((num) => num * 2);
console.log(odd);
console.log("The doubled numbers are", newNumber);


//-----------------Working with movies----------------------//

const movies = [
    {
    "title": "'71",
    "year": 2014,
    "rating": 7.2,
    "votes": 41702,
    "running_times": 5940
    },

    {
    "title": "'A' gai wak",
    "year": 1983,
    "rating": 7.4,
    "votes": 11942,
    "running_times": 6300
    },

    {
    "title": "'Breaker' Morant",
    "year": 1980,"rating": 7.9,
    "votes": 10702,
    "running_times": 6420
    },

    {
    "title": "'Crocodile' Dundee II",
    "year": 1988,"rating": 5.5,
    "votes": 47180,
    "running_times": 6480
    },

    {
    "title": "(500) Days of Summer",
    "year": 2009,
    "rating": 7.7,
    "votes": 412368,
    "running_times": 5700} ]

    //  movies with a short title
const ShortMoviesTitle = movies.map((shortTitle) => shortTitle.title);
   // the movies with a long title
let LongMoviesTitle = movies.map((longTitle) => longTitle.title).filter((movieTitle) => {
    if (movieTitle.length > 8) {
      console.log(shortMoviesTitle);
    } else if (movieTitle.length < 8) {
      console.log(ShortMoviesTitle);
    } else if ((movieTitle > 1980 && movieTitle < 1989).length) {
      console.log(MoviesInYear);
    }
   // the number of movies made between 1980-1989
let MoviesInYear = movies.map((title) => title.year);
  });

  // extra key called tag
const extra = movies.filter((movie) => {
    if (movie.rating >= 7) {
      movie["tag"] = "Good";
    } else if (movie.rating >= 4 && movie.rating < 7) {
      movie["tag"] = "Average";
    } else {
      movie["tag"] = "Bad";
    }
    return movie;
  });
  console.log(extra);
  
  //movies array to the rating of the movies.
  const Rated = movies
    .filter((ratedmovie) => ratedmovie.rating > 6).map((moviesRatings) => moviesRatings.rating);
     console.log(Rated);

  //  number of movies containing of keywords:
  const MoviesWords = movies.filter((movies1) => {
    if (movies1.title.toLowerCase().includes("surfer")) {
      return movies1;
    } else if (movies1.title.toLowerCase().includes("alien")) {
      return movies1;
    } else if (movies1.title.toLowerCase().includes("benjamin")) {
      return movies1;}}).length;
  console.log(MoviesWords);


  // movies where a word is duplicated.
  
  let wordsduplicated = movies.map((movie) => {
    const wordsdup = movie.title.toLowerCase().replace(/["']/g, "").split(" ");
    let Duplicate = {};
    let duplicateFound = false;wordsdup.forEach((word) => {
      if (word in Duplicate) {
        duplicateFound = true;
        Duplicate[word] = true;
      } else {
        Duplicate[word] = false;
      }
    });
    return Duplicate;
  });
  
  