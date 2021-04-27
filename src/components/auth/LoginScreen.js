import React from "react";
import { useForm } from "../../hooks/useForm";
import "./style.css";
export const LoginScreen = () => {
  const [formValue, handleInputChange] = useForm({
    email: "admin@gmail.com",
    password: "thePassword123",
  });
  const { email, password } = formValue;
  return (
    <div className="container   login">
      <div className="form-row shadow login__box">
        <div className="col-md-12 mb-3 mt-1">
          <h2>login</h2>
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="email"
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="col-md-12 mb-3 ">
          <button className="btn btn-info btn-block">Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
};
