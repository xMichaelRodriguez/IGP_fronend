import React from "react";

export const StoryItem = ({ title, body, id }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        src="https://www.semana.com/resizer/ca6QCqU4jDUxHqzGGF2yZf05mAk=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/EFUQLS2VIJBCZJVT7YJYFE5BHY.jpg"
        className="card-img-top"
        alt="https://www.semana.com/resizer/ca6QCqU4jDUxHqzGGF2yZf05mAk=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/EFUQLS2VIJBCZJVT7YJYFE5BHY.jpg"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${body.substr(0, 100)} ...`}</p>
      </div>
    </div>
  );
};
