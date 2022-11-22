import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Search from "./Search";
import AddFavourites from "./AddFavourites";
import WatchLater from "./WatchLater";
import fetchMovies from "../requests/axiosmovie";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  // const [favourites, setFavourites] = useState("");

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
                // handleFavouritesClick={addFavouriteMovie}
                favouriteComponent={AddFavourites}
              />
            </>
          }
        />
        {/* <Route path="/favourites" element={<Favourites />} /> */}
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </div>
  );
};

export default App;
