import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storyStartLoading } from "../../../actions/events";
import { StoryNavItem } from "./StoryNavItem";

const INITIAL_PAGE = 1;

export const StoryNav = () => {
  const { storyArr,total_page } = useSelector((state) => state.story.stories);
  const dispatch = useDispatch();
  //useState
  const [pageNext, setPageNext] = useState(INITIAL_PAGE);

  useEffect(() => {
    dispatch(storyStartLoading({}));
  }, [dispatch]);




  //next Page
  const handleNextPage = () => {
    if (pageNext < total_page) {
      setPageNext(pageNext + 1);
    } else {
      setPageNext(total_page);
    }
  };

  //previus page
  const handlePrevpage = () => {
    if (pageNext > total_page) {
      setPageNext(pageNext - 1);
    } else {
      setPageNext(INITIAL_PAGE);
    }
  };

  //nextPage and PrevPage
  useEffect(() => {
    dispatch(storyStartLoading({ page: pageNext }));
  }, [dispatch, pageNext]);

  return !!storyArr ? (
    <>
      <nav aria-label="Page navigation example ">
        <ul className="pagination justify-content-end animate__animated   animate__fadeIn">
          <li
            className={`page-item ${
              pageNext === INITIAL_PAGE ? "disabled hand" : "active"
            }`}
            onClick={handlePrevpage}
          >
            <span className="page-link" style={{ cursor: "pointer" }}>
              Anterior
            </span>
          </li>
         

          <li
            className={`page-item ${
              pageNext === total_page ? "disabled hand" : "active"
            }`}
            onClick={handleNextPage}
          >
            <span className="page-link " style={{ cursor: "pointer" }}>
              Siguiente
            </span>
          </li>
        </ul>
      </nav>
      <div className="card-columns">
        {storyArr.map((story) => (
          <StoryNavItem key={story.id} {...story} />
        ))}
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center">
      <strong>Cargando...</strong>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
