import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
export const NavbarProfile = () => {
  const { name } = useSelector((state) => state.auth);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark primary mb-3">
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
          <ul className="navbar-nav mr-auto ml-md px-2">
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
          <ul className="navbar-nav ml-auto px-3">
            <li className="nav-item active">
              <h3 className="text-light">{name}</h3>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
