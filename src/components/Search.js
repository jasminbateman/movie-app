import React from "react";
import PropTypes from "prop-types";
// import "../styles/Search.css";

const Search = ({ handleSubmit, handleInputChange, errorMessage }) => (
  <form onSubmit={handleSubmit}>
    <div className="search">
      <label htmlFor="title">
        <input
          className="input"
          placeholder="Enter a movie title"
          type="text"
          id="title-search"
          name="title"
          onChange={handleInputChange}
        />
      </label>
      <button className="search-button" type="submit">
        Search
      </button>
    </div>
    {errorMessage && <div className="error">{errorMessage}</div>}
  </form>
);

export default Search;

Search.defaultProps = {
  errorMessage: "",
};

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
