import axios from "axios";

const fetchMovies = (title) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=de960dde3632bb898e9ffc3d0fd62ab3&language=en-US&query=${title}&page=1&include_adult=false`;

  return axios
    .get(url)
    .then((response) => {
      const movies = response.data.results;
      console.log("here", movies[0]);
      return movies;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fetchMovies;
