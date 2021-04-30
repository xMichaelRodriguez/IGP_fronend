import React from "react";
import { useHistory } from "react-router";
import { useForm } from "../../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { startstoryAddNew } from "../../../actions/events";
import { setError } from "../../../actions/authActios";
export const NewStory = () => {
  const { msgError } = useSelector((state) => state.error);
  const history = useHistory();
  const dispatch = useDispatch();
  const [formValuue, handleInputChange, reset] = useForm({
    title: "",
    body: "",
  });

  const { title, body } = formValuue;

  const handleSavedStory = () => {
    if (isFormValid()) {
      dispatch(startstoryAddNew(formValuue));
      reset();
    }
  };

  const isFormValid = () => {
    if (validator.isEmpty(title)) {
      dispatch(setError("Titulo requiredo"));
      return false;
    }
    if (!validator.isLength(title, { min: 6 })) {
      dispatch(setError("Minimo 6 caracteres"));
      return false;
    }

    if (validator.isEmpty(body)) {
      dispatch(setError("Cuerpo de la historia requerido"));
      return false;
    }

    if (!validator.isLength(body, { min: 50, max: 2000 })) {
      dispatch(
        setError("el cuerpo debe conenter almenos 50 caracteres y maximo 2000")
      );
      return false;
    }

    return true;
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-link font-weight-bolder"
        style={{ fontSize: "15px" }}
        onClick={() => {
          history.push("/profile/stories");
        }}
      >
        &#x2039; Volver
      </button>
      <form className="shadow px-5">
        <div className="form-group py-3">
          <label htmlFor="exampleFormControlInput1 font-weight-bolder">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Titulo"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group  py-3">
          <label htmlFor="exampleFormControlInput1 font-weight-bolder">
            Cuerpo
          </label>
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="todo empezo en.."
            name="body"
            value={body}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="py-4">
          <button
            className="btn btn-info btn-lg w-25  d-flex justify-content-around "
            type="button"
            onClick={handleSavedStory}
          >
            <p className="m-auto">Guardar</p>
            <i className="fas fa-save fa-2x"></i>
          </button>
        </div>
        {!!msgError && (
          <div className="container py-2">
            <div className="alert alert-danger " role="alert">
              <span className="  font-weight-normal">{msgError}</span>
            </div>
          </div>
        )}
      </form>
    </>
  );
};
