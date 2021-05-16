import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
export const NavbarScreen = () => {
  const history = useHistory();
  const { name } = useSelector((state) => state.auth);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark primary mb-3">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.imgur.com/WNKowqR.jpg"
            className="rounded"
            width="70"
            height="70"
            alt="UVS"
          />
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
                <Link className="nav-link" to="noticies">
                  Noticias
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link className="nav-link" to="stories">
                  Historias de vida
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link className="nav-link" to="organizations">
                  Organizaciones
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link className="nav-link" to="learning-about-violence">
                  Aprendiendo sobre la violencia
                </Link>
              </h3>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              {!name ? (
                <Link to="/auth/login" className="btn btn-secondary btn-lg">
                  Login
                </Link>
              ) : (
                <h3
                  onClick={() => {
                    history.push("/profile/");
                  }}
                >
                  {name}
                </h3>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
