import React from "react";
import { useDispatch } from "react-redux";
import { startstoryDeleted, storyClearActive } from "../../actions/events";

export const DeleteButtonFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(startstoryDeleted());
  };
  const handleClear = () => {
    dispatch(storyClearActive());
  };
  return (
    <div
      class="btn-group"
      style={{ position: "fixed", left: "20px", bottom: "10px" }}
      role="group"
      aria-label="Basic example"
    >
      <button type="button" class="btn btn-danger" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
        <span> Borrar</span>
      </button>
      <button type="button" class="btn btn-info" onClick={handleClear}>
        <span>Cancelar </span>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
