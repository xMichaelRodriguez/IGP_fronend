import moment from "moment";
import "moment/locale/es";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchSync } from "../../../helpers/fetching";

import { BsArrowReturnLeft } from "react-icons/bs";
export const StoryCard = ({ history }) => {
  const { storyId } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    (async function () {
      const data = await fetchSync(`stories/${storyId}`);
      const body = await data.json();

      if (body.ok) {
        delete body.ok;
        setStory(body.stories);
      }
    })();
  }, [storyId]);
  if (story === {}) {
    return (
      <div className="d-flex justify-content-center m-auto">
        <strong>Cargando...</strong>
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="card p-3 mb-5   animate__animated   animate__zoomIn">
      <div className="card-body">
        <div className="card-title d-block justify-content-between   animate__animated   animate__zoomIn">
          <h1>{story.title}</h1>
          <h6 className="text-muted">{moment(story.date).calendar()}</h6>
        </div>

        <p
          className="card-text text-justify  animate__animated   animate__zoomIn"
          style={{ fontSize: "20px" }}
        >
          {story.body}
        </p>
      </div>
      <div className="card-footer  animate__animated   animate__zoomIn">
        <Link className="btn btn-info btn-lg" to="/stories">
          <BsArrowReturnLeft size="1.5rem" /> Volver
        </Link>
      </div>
    </div>
  );
};
