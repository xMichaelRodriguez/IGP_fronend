import React from "react";
import { Link } from "react-router-dom";

import { StoryScreen } from "../stories/StoryScreen";
import { BsArrowRight } from "react-icons/bs";
import { NoticeScreen } from "../noticies/NoticeScreen";
export const HomeScreen = () => {
  return (
    <>
      <section style={{ backgroundColor: "#F5F5F5" }} className="p-3 mb-3">
        <div className="d-flex justify-content-between">
          <h4>Nuevas Historias</h4>
          <Link to="/stories">
            <h4>
              Todas las historias <BsArrowRight />{" "}
            </h4>
          </Link>
        </div>
        <hr />
        <StoryScreen />
      </section>
      <section style={{ backgroundColor: "#F5F5F5" }} className="p-3 mb-4">
        <div className="d-flex justify-content-between">
          <h4>Nuevas Noticias</h4>
          <Link to="/noticies">
            <h4>
              Todas las noticias <BsArrowRight />
            </h4>
          </Link>
        </div>
        <hr />
        <NoticeScreen />
      </section>
    </>
  );
};
