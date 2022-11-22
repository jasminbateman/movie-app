import PropTypes from "prop-types";
import React from "react";
import FavouriteMovieCard from "./FavouriteMovieCard";
import "../styles/Movies.css";

const Favourites = ({
  favouriteComponent,
  handleFavouritesClick,
  favouriteMovies,
  favouriteIcon,
}) => (
  <div className="search-results">
    {favouriteMovies &&
      favouriteMovies.map((movie) => (
        <FavouriteMovieCard
          posterPath={movie.poster_path}
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          popularity={movie.popularity}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          voteCount={movie.vote_count}
          favouriteComponent={favouriteComponent}
          handleFavouritesClick={handleFavouritesClick}
          movie={movie}
          favouriteMovies={favouriteMovies}
          favouriteIcon={favouriteIcon}
        />
      ))}
  </div>
);
Favourites.propTypes = {
  favouriteComponent: PropTypes.func.isRequired,
  handleFavouritesClick: PropTypes.func.isRequired,
  favouriteIcon: PropTypes.shape(),
  favouriteMovies: PropTypes.arrayOf(
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
  ),
};

Favourites.defaultProps = {
  favouriteMovies: [],
  favouriteIcon: [],
};

export default Favourites;
