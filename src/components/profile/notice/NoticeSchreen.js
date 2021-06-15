import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight, BsPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  noticeClearActive,
  noticeStartLoading,
} from '../../../actions/noticesActions';
import { NotFiles } from '../../../helpers/NotFiles';
import { DeleteButtonFab } from '../../UI/DeleteButtonFab';
import { NoticeNavItem } from '../../UI/noticeNav/NoticeNavItem';
const INITIAL_PAGE = 1;
export const NoticeSchreen = () => {
  const history = useHistory();
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

  const handleNewNotice = () => {
    dispatch(noticeClearActive());
    history.push('/profile/manage-notice');
  };
  return (
    <div className='container '>
      <button
        className='btn btn-info mb-3  animate__animated animate__fadeIn'
        onClick={handleNewNotice}
      >
        <BsPlus size='1.5rem' /> &nbsp; Nueva Noticia
      </button>
      <hr />
      {!!noticeArr ? (
        <>
          <nav aria-label='Page navigation example '>
            <ul className='pagination justify-content-end animate__animated animate__fadeIn'>
              <li
                className={`page-item ${
                  pageNext === INITIAL_PAGE ? 'disabled hand' : 'active'
                }`}
                onClick={handlePrevpage}
              >
                <span className='page-link' style={{ cursor: 'pointer' }}>
                  <BsChevronLeft />
                  Anterior
                </span>
              </li>

              <li
                className={`page-item ${
                  pageNext === total_page ? 'disabled hand ' : 'active'
                }`}
                onClick={handleNextPage}
              >
                <span className='page-link ' style={{ cursor: 'pointer' }}>
                  Siguiente <BsChevronRight />
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
        <NotFiles />
      )}

      {!!activeNotice && <DeleteButtonFab />}
    </div>
  );
};
