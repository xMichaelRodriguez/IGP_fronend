import React from "react";
import { useDispatch } from "react-redux";
import { StorySetActive } from "../../../actions/events";

export const StoryItem = ({ title, body, id }) => {
  const story = {
    title,
    body,
    id,
  };
  const dispatch = useDispatch();

  const handleDoubleClick = () => {
    dispatch(StorySetActive(story));
  };
  return (
    <div
      className="card shadow "
      style={{ width: "14rem" }}
      onDoubleClick={handleDoubleClick}
    >
      <img
        src="https://www.semana.com/resizer/ca6QCqU4jDUxHqzGGF2yZf05mAk=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/EFUQLS2VIJBCZJVT7YJYFE5BHY.jpg"
        className="card-img-top img-fluid"
        alt="https://www.semana.com/resizer/ca6QCqU4jDUxHqzGGF2yZf05mAk=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/EFUQLS2VIJBCZJVT7YJYFE5BHY.jpg"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${body.substr(0, 100)} ...`}</p>
      </div>
    </div>
  );
};
