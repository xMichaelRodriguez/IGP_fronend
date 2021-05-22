import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { noticeStartLoading } from "../../../actions/noticesActions";
import { NotFiles } from "../../../helpers/NotFiles";
import { DeleteButtonFab } from "../../UI/DeleteButtonFab";
import { NoticeNavItem } from "../../UI/noticeNav/NoticeNavItem";
const INITIAL_PAGE = 1;
export const NoticeSchreen = () => {
  const dispatch = useDispatch();
  const { noticeArr, total_page } = useSelector(
    (state) => state.notice.noticies
  );
  const { activeNotice } = useSelector((state) => state.notice);
  const [pageNext, setPageNext] = useState(INITIAL_PAGE);

  useEffect(() => {
    dispatch(noticeStartLoading({}));
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
    dispatch(noticeStartLoading({ page: pageNext }));
  }, [dispatch, pageNext]);
  return (
    <>
      <Link
        to="/profile/manage-notice"
        className="btn btn-info animate__animated animate__fadeIn"
      >
        <FaPlus /> Nueva Noticia
      </Link>
      <hr />
      {!!noticeArr ? (
        <>
          <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-end animate__animated animate__fadeIn">
              <li
                className={`page-item ${
                  pageNext === INITIAL_PAGE ? "disabled hand" : "active"
                }`}
                onClick={handlePrevpage}
              >
                <span className="page-link" style={{ cursor: "pointer" }}>
                  <BsChevronLeft />
                  Anterior
                </span>
              </li>

              <li
                className={`page-item ${
                  pageNext === total_page ? "disabled hand " : "active"
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
            {noticeArr.map((notice) => (
              <NoticeNavItem key={notice.id} {...notice} />
            ))}
          </div>
        </>
      ) : (
        <NotFiles />
      )}

      {!!activeNotice && <DeleteButtonFab />}
    </>
  );
};
