import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <Link to="/">
          <span className="nav__link">Home</span>
        </Link>
        <Link to="/history">
          <span className="nav__link">History</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
