import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Search from "./Search";
import AddFavourites from "./AddFavourites";
import RemoveFavourites from "./RemoveFavourites";
import AddWatchLater from "./AddWatchLater";
import RemoveWatchLater from "./RemoveWatchLater";
import WatchLater from "./WatchLater";
import fetchMovies from "../requests/axiosmovie";
import FavouriteIcon from "./FavouriteIcon";
import Favourites from "./Favourites";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);

  const getMovies = async (searchInput) => {
    const movies = await fetchMovies(searchInput);
    setSearchResults(movies);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (inputValue) {
      getMovies(inputValue);
      setErrorMessage("");
    } else {
      setErrorMessage("* Please enter a movie title");
      setInputValue("");
      setSearchResults([]);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    console.log("movie added");
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    console.log(newFavouriteList);

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    console.log("favourite removed");
  };

  useEffect(() => {
    const watchLaterMovies = JSON.parse(
      localStorage.getItem("react-movie-app-watch-later")
    );

    if (watchLaterMovies) {
      setFavourites(watchLaterMovies);
    }
  }, []);

  const saveToLocalStorageWatchLater = (items) => {
    localStorage.setItem("react-movie-app-watch-later", JSON.stringify(items));
  };

  const addWatchLater = (movie) => {
    const newWatchLaterList = [...watchLaterList, movie];
    setWatchLaterList(newWatchLaterList);
    saveToLocalStorageWatchLater(newWatchLaterList);
    console.log("movie added to watch later");
  };

  const removeWatchLater = (movie) => {
    const newWatchLaterList = watchLaterList.filter(
      (favourite) => favourite.id !== movie.id
    );
    console.log(newWatchLaterList);

    setWatchLaterList(newWatchLaterList);
    saveToLocalStorageWatchLater(newWatchLaterList);
    console.log("favourite removed");
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search
                className="search"
                handleSubmit={handleSearch}
                handleInputChange={handleInputChange}
                errorMessage={errorMessage}
              />
              <Movies
                className="searchResults"
                searchResults={searchResults}
                favouriteComponent={AddFavourites}
                handleFavouritesClick={addFavouriteMovie}
                favouriteIcon={FavouriteIcon}
                favouriteMovies={favourites}
                handleWatchLaterClick={addWatchLater}
                watchLaterComponent={AddWatchLater}
              />
            </>
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              className="search"
              favouriteMovies={favourites}
              favouriteComponent={RemoveFavourites}
              handleFavouritesClick={removeFavouriteMovie}
              favouriteIcon={FavouriteIcon}
            />
          }
        />
        <Route
          path="/watch-later"
          element={
            <WatchLater
              className="watch-later"
              favouriteMovies={favourites}
              favouriteComponent={RemoveFavourites}
              handleFavouritesClick={removeFavouriteMovie}
              favouriteIcon={FavouriteIcon}
              handleWatchLaterClick={removeWatchLater}
              watchLaterList={watchLaterList}
              watchLaterComponent={RemoveWatchLater}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
