import PropTypes from "prop-types";
import React from "react";
import "../styles/MovieCard.css";

const URL_IMG = "https://image.tmdb.org/t/p/w342";

const MovieCard = (props) => {
  const {
    // id,
    overview,
    popularity,
    posterPath,
    releaseDate,
    title,
    voteAverage,
    voteCount,
    // onSaveMovie,
    // userId,
  } = props;

  // eslint-disable-next-line react/destructuring-assignment
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div className="movie-card">
      <div className="poster_path">
        <img
          className="movie_image"
          src={URL_IMG + posterPath}
          alt="Movie Poster"
        />
      </div>
      <div className="movie-title">{title}</div>
      <div className="overview">{overview}</div>
      <div className="popularity">{popularity}</div>
      <div className="release_date">{releaseDate}</div>
      <div className="vote_average">{voteAverage}</div>
      <div className="vote_count">{voteCount}</div>
      <div className="overlay d-flex align-items-center justify-content-center">
        <FavouriteComponent />
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  //   id: PropTypes.number.isRequired,
  favouriteComponent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
  //   userId: PropTypes.string.isRequired,
  //   onSaveMovie: PropTypes.func.isRequired,
};

export default MovieCard;
