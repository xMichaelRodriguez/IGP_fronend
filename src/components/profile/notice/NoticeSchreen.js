import React, { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
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
        className='uk-button primary animate__animated animate__fadeIn'
        onClick={handleNewNotice}
      >
        <BsPlus size='1.5rem' /> &nbsp; Nueva Noticia
      </button>
      <hr className='uk-divider-icon' />
      {!!noticeArr ? (
        <>
          <ul className='uk-pagination animate__animated   animate__fadeIn'>
            <li
              className={`uk-text-bold ${
                pageNext === INITIAL_PAGE ? 'uk-disabled hand' : ''
              }`}
              style={{ cursor: 'pointer' }}
            >
              <span onClick={handlePrevpage}>
                <span uk-pagination-previous=''></span> Anterior
              </span>
            </li>
            <li
              className={`uk-text-bold ${
                pageNext === total_page ? 'uk-disabled hand' : ''
              }`}
              style={{ cursor: 'pointer' }}
            >
              <span onClick={handleNextPage}>
                Siguiente <span uk-pagination-next=''></span>
              </span>
            </li>
          </ul>
          <div className='uk-child-width-expand@s uk-grid-small ' uk-grid=''>
            {noticeArr.map((notice) => (
              <div className='uk-width-1-3@m' key={notice.id}>
                <NoticeNavItem {...notice} />
              </div>
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
