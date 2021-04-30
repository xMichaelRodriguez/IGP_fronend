import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import "./style.css";
import validator from "validator";
import { startLogin } from "../../actions/authActios";
import { useHistory } from "react-router";
export const LoginScreen = () => {
  const { msgError } = useSelector((state) => state.error);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();

  const [ErrorE, setErrorE] = useState(true);
  const [ErrorP, setErrorP] = useState(true);

  const [formValue, handleInputChange] = useForm({
    email: "admin@gmail.com",
    password: "thePassword123",
  });
  const { email, password } = formValue;

  useEffect(() => {
    if (uid) {
      return history.push("/");
    }
  }, [uid, history]);

  const handleLogin = () => {
    if (isFormValid()) {
      dispatch(startLogin(email, password));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      setErrorE(false);
      return false;
    }

    if (password.length < 5) {
      setErrorP(false);
      return false;
    }
    setErrorE(true);
    setErrorP(true);
    return true;
  };

  return (
    <div className="container   login">
      <div className="form-row shadow login__box">
        <div className="col-md-12 mb-3 mt-1">
          <h2>login</h2>
        </div>
        <div className="col-md-12 mb-3">
          <div className={`form-group ${!ErrorE && "has-danger"}  `}>
            <input
              type="text"
              className={`form-control ${!ErrorE && "is-invalid"} `}
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="email"
            />
            {!ErrorE && <div className="invalid-feedback">Invalid Email</div>}
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <div className={`form-group ${!ErrorP && "has-danger"}  `}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className={`form-control ${!ErrorP && "is-invalid"} `}
              placeholder="password"
            />
            {!ErrorP && (
              <div className="invalid-feedback">Invalid Password</div>
            )}
          </div>
        </div>
        {!!msgError && (
          <h3>
            <span className="badge badge-danger font-weight-normal">
              {msgError}
            </span>
          </h3>
        )}
        <div className="col-md-12 mb-3 ">
          <button className="btn btn-info btn-block" onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
