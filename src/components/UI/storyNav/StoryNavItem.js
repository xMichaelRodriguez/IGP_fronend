import React from "react";
import moment from "moment";
import "moment/locale/es";
import { Link, useLocation } from "react-router-dom";
export const StoryNavItem = ({ title, body, date, id }) => {
  const location = useLocation();
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-subtitle text-muted mt-2">
          <h6>{moment(date).calendar()}</h6>
        </div>
        <div className="card-text">
          <p>{`${body.substr(0, 100)}...`}</p>
        </div>
        {!location.pathname.includes("/profile") && (
          <div className="card-link mt-2">
            <Link className="btn btn-link" to={`/stories/${id}`}>
              Leer Mas...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
