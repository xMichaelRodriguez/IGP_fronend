import React from "react";
import { useDispatch } from "react-redux";
import { noticeSetActive } from "../../../actions/noticesActions";

export const NoticeItem = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const notice = {
    title,
    body,
    id,
  };
  const handleDoubleClick = () => {
    dispatch(noticeSetActive(notice));
  };
  return (
    <div className="card" onDoubleClick={handleDoubleClick}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${body.substr(0, 180)} ...`}</p>
      </div>
    </div>
  );
};
