import PropTypes from "prop-types";
import React from "react";
import MovieCard from "./MovieCard";
import "../styles/Movies.css";

const Movies = ({ searchResults, favouriteComponent }) => (
  <div className="search-results">
    {searchResults &&
      searchResults.map((movie) => (
        <MovieCard
          posterPath={movie.poster_path}
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          popularity={movie.popularity}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
          favouriteComponent={favouriteComponent}
          // userId={userId}
        />
      ))}
  </div>
);
Movies.propTypes = {
  favouriteComponent: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Movies;
