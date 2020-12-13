import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Arnowa Assignment
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/task1">
              Task 1 And 2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/task3">
              Task 3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/task4">
              Task 4
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
