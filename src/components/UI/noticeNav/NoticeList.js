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
    !!noticeArr && (
      <div className='uk-container uk-padding-small'>
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
          {noticeArr.map((story) => (
            <div className='uk-width-1-3@m' key={story.id}>
              <NoticeNavItem {...story} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};
