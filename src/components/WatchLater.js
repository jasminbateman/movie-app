import PropTypes from "prop-types";
import React from "react";
import WatchLaterCard from "./WatchLaterCard";
import "../styles/Movies.css";

const WatchLater = ({
  favouriteComponent,
  handleFavouritesClick,
  favouriteMovies,
  favouriteIcon,
  handleWatchLaterClick,
  watchLaterList,
  watchLaterComponent,
}) => (
  <div className="search-results">
    {watchLaterList &&
      watchLaterList.map((movie) => (
        <WatchLaterCard
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
          handleWatchLaterClick={handleWatchLaterClick}
          watchLaterList={watchLaterList}
          watchLaterComponent={watchLaterComponent}
        />
      ))}
  </div>
);
WatchLater.propTypes = {
  favouriteComponent: PropTypes.func.isRequired,
  handleFavouritesClick: PropTypes.func.isRequired,
  favouriteIcon: PropTypes.shape(),
  handleWatchLaterClick: PropTypes.func.isRequired,
  favouriteMovies: PropTypes.shape(),
  watchLaterComponent: PropTypes.func.isRequired,
  watchLaterList: PropTypes.arrayOf(
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

WatchLater.defaultProps = {
  favouriteMovies: [],
  favouriteIcon: [],
  watchLaterList: [],
};

export default WatchLater;
