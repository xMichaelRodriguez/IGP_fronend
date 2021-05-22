import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { startstoryAddNew, storyStartUpdated } from "../../../actions/events";
import { setError } from "../../../actions/authActios";

import "./storyStyles.css";
import { FaSave } from "react-icons/fa";

const initEvent = {
  title: "",
  body: "",
};
export const NewStory = () => {
  const history = useHistory();
  const { msgError } = useSelector((state) => state.error);
  const { activeStory } = useSelector((state) => state.story);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(initEvent);

  const { title, body } = formValue;
  useEffect(() => {
    if (activeStory) {
      setFormValue(activeStory);
    } else {
      setFormValue(initEvent);
    }
  }, [activeStory, setFormValue]);

  //manejo de los cambios de los inputs
  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };
  const handleSavedStory = () => {
    if (isFormValid()) {
      if (activeStory) {
        setFormValue(initEvent);
        dispatch(storyStartUpdated(formValue));
      } else {
        dispatch(startstoryAddNew(formValue));
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
        className="btn btn-link font-weight-bolder animate__animated animate__fadeIn"
        style={{ fontSize: "15px" }}
        onClick={() => {
          history.push("/profile/stories");
        }}
      >
        &#x2039; Volver
      </button>

      <form className="shadow-p px-5 animate__animated animate__zoomIn">
        <fieldset className="mb-2">
          <legend className="py-3 font-weight-bold">
            {activeStory ? "Editar Historia" : "Nueva Historia"}
          </legend>
          <div className="form-group py-3 ">
            <label
              htmlFor="exampleFormControlInput1 "
              className="font-weight-bold"
            >
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
            <label
              htmlFor="exampleFormControlInput1 "
              className="font-weight-bold"
            >
              Cuerpo
            </label>
            <textarea
              className="form-control mb-3"
              rows="5"
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
              <FaSave size="1.5rem" className="mr-1" />{" "}
              {activeStory ? "publicar cambios" : "publicar"}
            </button>
          </div>
          {!!msgError && (
            <div className="container py-2">
              <div className="alert alert-danger " role="alert">
                <span className="  font-weight-normal">{msgError}</span>
              </div>
            </div>
          )}
        </fieldset>
      </form>
    </>
  );
};
