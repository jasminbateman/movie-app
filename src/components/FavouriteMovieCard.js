import PropTypes from "prop-types";
import React from "react";
import "../styles/MovieCard.css";
import FavouriteIcon from "./FavouriteIcon";

const URL_IMG = "https://image.tmdb.org/t/p/w342";

const FavouriteMovieCard = (props) => {
  const {
    overview,
    popularity,
    posterPath,
    releaseDate,
    title,
    voteAverage,
    voteCount,
    handleFavouritesClick,
    movie,
    favouriteMovies,
  } = props;

  // eslint-disable-next-line react/destructuring-assignment
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div className="movie-card">
      <div className="favourite-icon">
        {favouriteMovies.includes(movie) && <FavouriteIcon />}
      </div>
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
      <div
        onClick={() => handleFavouritesClick(movie)}
        role="presentation"
        className="overlay d-flex align-items-center justify-content-center"
      >
        <FavouriteComponent />
      </div>
    </div>
  );
};

FavouriteMovieCard.propTypes = {
  //   id: PropTypes.number.isRequired,
  favouriteComponent: PropTypes.func.isRequired,
  favouriteMovies: PropTypes.shape(),
  handleFavouritesClick: PropTypes.func.isRequired,
  movie: PropTypes.shape().isRequired,
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

FavouriteMovieCard.defaultProps = {
  favouriteMovies: [],
};

export default FavouriteMovieCard;
