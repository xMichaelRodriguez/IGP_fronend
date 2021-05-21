import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { storyStartLoading } from "../../../actions/events";
import { DeleteButtonFab } from "../../UI/DeleteButtonFab";
import { StoryItem } from "./StoryItem";
// icons
import { BsPlus, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const INITIAL_PAGE = 1;
export const StoryScreen = () => {
  //dispatchs
  const dispatch = useDispatch();
  //history
  const history = useHistory();

  //selector
  const { storyArr } = useSelector((state) => state.story.stories);
  const { activeStory } = useSelector((state) => state.story);
  const { total_page } = useSelector((state) => state.story.stories);
  //useState
  const [numPages, setNumPages] = useState([]);
  const [pageNext, setPageNext] = useState(INITIAL_PAGE);

  useEffect(() => {
    dispatch(storyStartLoading({}));
  }, [dispatch]);

  const numberP = [];
  useEffect(() => {
    for (let index = 0; index < total_page; index++) {
      numberP.push(index + 1);
    }
    setNumPages(numberP);
  }, [total_page]);

  const handleNewStory = () => {
    history.push("/profile/new-story");
  };
  //manja intracion en los item de cada pagina
  const handleItempage = (numberPage) => {
    dispatch(storyStartLoading({ page: numberPage }));
  };

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
  }, [pageNext]);

  return (
    <>
      <button className="btn btn-info mb-3" onClick={handleNewStory}>
        <BsPlus size="1.5rem" /> &nbsp; Nueva historia
      </button>
      <hr />

      {storyArr && storyArr.length !== 0 ? (
        <>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li
                className={`page-item ${
                  pageNext === INITIAL_PAGE ? "disabled hand" : ""
                }`}
                onClick={handlePrevpage}
              >
                <span className="page-link" style={{ cursor: "pointer" }}>
                  <BsChevronLeft />
                  Anterior
                </span>
              </li>
              {numPages.map((num) => (
                <li
                  className={`page-item ${num == pageNext ? "active" : ""} `}
                  key={num}
                >
                  <Link
                    className="page-link"
                    onClick={() => {
                      handleItempage(num);
                      dispatch(storyStartLoading({ page: num }));
                      setPageNext(num);
                    }}
                  >
                    {num}
                  </Link>
                </li>
              ))}

              <li
                className={`page-item ${
                  pageNext === total_page ? "disabled hand" : ""
                }`}
                onClick={handleNextPage}
              >
                <span className="page-link " style={{ cursor: "pointer" }}>
                  Siguiente <BsChevronRight />
                </span>
              </li>
            </ul>
          </nav>

          <div className="card-columns">
            {storyArr.map(({ id, title, body }) => (
              <StoryItem title={title} body={body} id={id} key={id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <strong>Cargando...</strong>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      )}

      {activeStory && <DeleteButtonFab />}
    </>
  );
};
