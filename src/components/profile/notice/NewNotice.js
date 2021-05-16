import React, { useEffect, useState } from "react";
import "../story/storyStyles.css";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { setError } from "../../../actions/authActios";
import {
  noticeClearActive,
  noticetStartUpdated,
  startnoticeAddNew,
} from "../../../actions/noticesActions";
import { useHistory } from "react-router";

const initEvent = {
  title: "",
  body: "",
};

export const NewNotice = () => {
  const history = useHistory();
  const { msgError } = useSelector((state) => state.error);
  const { activeNotice } = useSelector((state) => state.notice);
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(initEvent);

  const { title, body } = formValue;

  useEffect(() => {
    if (activeNotice) {
      setFormValue(activeNotice);
    } else {
      setFormValue(initEvent);
    }
  }, [activeNotice, setFormValue]);

  //manejo de los cambios de los inputs
  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  //Manejo de guardado | edicion de la noticia
  const handleSavedNotice = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      if (activeNotice) {
        dispatch(noticetStartUpdated(formValue));
        setFormValue(initEvent);
      } else {
        dispatch(startnoticeAddNew(formValue));
        setFormValue(initEvent);
      }
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
        setError("Cuerpo debe conenter almenos 50 caracteres y maximo 2000")
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
          history.push("/profile/noticies");
          dispatch(noticeClearActive());
        }}
      >
        &#x2039; Volver
      </button>

      <form className="mb-3 shadow-p p-4" onSubmit={handleSavedNotice}>
        <fieldset>
          <legend className="font-weight-bold">
            {activeNotice ? "Editar Notica" : "Nueva Noticia"}
          </legend>

          <div
            className={`form-group ${
              (msgError.includes("Titulo") || msgError.includes("Minimo")) &&
              "has-danger"
            }`}
          >
            <label htmlFor="title" className="form-label mt-4 font-weight-bold">
              Title
            </label>
            <input
              type="text"
              className={`form-control ${
                (msgError.includes("Titulo") || msgError.includes("Minimo")) &&
                "is-invalid"
              }`}
              id="title"
              value={title}
              name="title"
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <span className="invalid-feedback">
              {(msgError.includes("Titulo") || msgError.includes("Minimo")) &&
                msgError}
            </span>
          </div>
          <div
            className={`form-group ${
              (msgError.includes("Cuerpo") || msgError.includes("almenos")) &&
              "has-danger"
            }`}
          >
            <label
              htmlFor="noticebody"
              className="form-label mt-4 font-weight-bold"
            >
              Cuerpo de la noticia
            </label>
            <textarea
              type="text"
              className={`form-control ${
                (msgError.includes("Cuerpo") || msgError.includes("almenos")) &&
                "is-invalid"
              }`}
              id="noticebody"
              value={body}
              name="body"
              onChange={handleInputChange}
              placeholder="notica..."
              rows="10"
            ></textarea>
            <span className="invalid-feedback">
              {(msgError.includes("Cuerpo") || msgError.includes("almenos")) &&
                msgError}
            </span>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-info btn-lg  ">
              <FaSave size="1.5rem" className="mr-1" />{" "}
              {activeNotice ? "publicar cambios" : "publicar"}
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
