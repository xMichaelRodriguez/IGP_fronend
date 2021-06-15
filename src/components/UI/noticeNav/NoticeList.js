import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noticeStartLoading } from '../../../actions/noticesActions';
import { NoticeNavItem } from './NoticeNavItem';

const INITIAL_PAGE = 1;
export const NoticeList = () => {
  const { noticeArr, total_page } = useSelector(
    (state) => state.notice.noticies
  );
  const dispatch = useDispatch();
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
    <div className='container'>
      {!!noticeArr ? (
        <>
          <nav aria-label='Page navigation example'>
            <ul className='pagination justify-content-end animate__animated   animate__fadeIn'>
              <li
                className={`page-item ${
                  pageNext === INITIAL_PAGE ? 'disabled hand' : 'active'
                }`}
                onClick={handlePrevpage}
              >
                <span className='page-link' style={{ cursor: 'pointer' }}>
                  Anterior
                </span>
              </li>

              <li
                className={`page-item ${
                  pageNext === total_page ? 'disabled hand' : 'active'
                }`}
                onClick={handleNextPage}
              >
                <span className='page-link ' style={{ cursor: 'pointer' }}>
                  Siguiente
                </span>
              </li>
            </ul>
          </nav>
          <div className='card-columns mb-5'>
            {noticeArr.map((notice) => (
              <NoticeNavItem key={notice.id} {...notice} />
            ))}
          </div>
        </>
      ) : (
        <h1>hola</h1>
      )}
    </div>
  );
};
