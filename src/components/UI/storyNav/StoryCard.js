import moment from "moment";
import "moment/locale/es";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchSync } from "../../../helpers/fetching";

import {BsArrowReturnLeft} from 'react-icons/bs'
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
  }, []);

  return story !== null || story !== undefined ? (
    <div className="card">
      <div className="card-body">
        <div className="card-title d-flex justify-content-between ">
          <h1>{story.title}</h1>
          <h6 className="text-muted">{moment(story.date).calendar()}</h6>
        </div>

        <p className="card-text text-justify" style={{ fontSize: "20px" }}>
          {story.body}
        </p>
      </div>
      <div className='card-footer'>
          <Link className='btn btn-info btn-lg' to="/stories">
              <BsArrowReturnLeft size="1.5rem" />{" "}
              Volver</Link>
      </div>
    </div>
  ) : (
    <h1>nada</h1>
  );
};
