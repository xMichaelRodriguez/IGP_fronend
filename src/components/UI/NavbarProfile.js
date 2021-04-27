import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export const NavbarProfile = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          UVS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto ml-md">
            <li className="nav-item active">
              <h3>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link className="nav-link" to="/profile/noticies">
                  Noticias
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link className="nav-link" to="/profile/stories">
                  Historias
                </Link>
              </h3>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item active">
              <Link to="/auth/login" className="btn primary">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
