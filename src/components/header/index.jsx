import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="src/assets/Fishred.svg" alt="" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//html sematic

export default Header;
