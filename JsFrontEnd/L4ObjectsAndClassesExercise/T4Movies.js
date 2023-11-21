function movies(inputMoviesArr) {
  let moviesArr = [];
  for (let i = 0; i < inputMoviesArr.length; i++) {
    let movie = {
      name: "",
      director: "",
      date: "",
    };
    if (inputMoviesArr[i].split(" ")[0] === "addMovie") {
      movie.name = inputMoviesArr[i].split("addMovie ")[1];
      moviesArr.push(movie);
    } else if (inputMoviesArr[i].includes("onDate")) {
      let movieName = inputMoviesArr[i].split(" onDate ")[0];
      let date = inputMoviesArr[i].split(" onDate ")[1];
      moviesArr.forEach((element) => {
        if (element.name === movieName) {
          element.date = date;
        }
      });
    } else {
      let movieName = inputMoviesArr[i].split(" directedBy ")[0];
      let director = inputMoviesArr[i].split(" directedBy ")[1];
      moviesArr.forEach((element) => {
        if (element.name === movieName) {
          element.director = director;
        }
      });
    }
  }
  moviesArr.forEach((element) => {
    if (element.date && element.director) {
      console.log(JSON.stringify(element));
    }
  });
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
