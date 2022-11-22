import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => (
  <div className="navbar">
    <h2>Movie App</h2>
    <ul className="links">
      <li className="navbar-links-item">
        <Link className="link" to="/">
          Search Movies
        </Link>
      </li>
      <li className="navbar-links-item">
        <Link className="link" to="favourites">
          Favourites
        </Link>
      </li>
      <li className="navbar-links-item">
        <Link className="link" to="watch-later">
          Watch Later
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
