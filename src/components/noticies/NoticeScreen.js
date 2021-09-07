import moment from 'moment';
import 'moment/locale/es';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noticeStartLoading } from '../../actions/noticesActions';
import { CardScreen } from '../cards/CardScreen';
const INITIAL_PAGE = 1;
export const NoticeScreen = () => {
  const { noticies } = useSelector((state) => state.notice);

  const dispatch = useDispatch();
  const [pageNext, setPageNext] = useState(INITIAL_PAGE);

  useEffect(() => {
    dispatch(noticeStartLoading({ page: 1 }));
  }, [dispatch]);

  //next Page
  const handleNextPage = () => {
    if (pageNext < noticies.total_page) {
      setPageNext(pageNext + 1);
    } else {
      setPageNext(noticies.total_page);
    }
  };

  //previus page
  const handlePrevpage = () => {
    if (pageNext > noticies.total_page) {
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
    <section className='row'>
      <div className='col-md-12'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li
              className={`page-item ${
                pageNext === INITIAL_PAGE ? '' : 'disabled'
              }`}
            >
              <p className='page-link' onClick={handlePrevpage}>
                Previous
              </p>
            </li>
            <li className='page-item'>
              <p className='page-link'>1</p>
            </li>
            <li className='page-item'>
              <p className='page-link'>2</p>
            </li>
            <li className='page-item'>
              <p className='page-link'>3</p>
            </li>
            <li
              className={`page-item ${
                pageNext === INITIAL_PAGE ? 'disabled' : ''
              }`}
            >
              <p className='page-link' onClick={handleNextPage}>
                Next
              </p>
            </li>
          </ul>
        </nav>
      </div>
      <CardScreen data={noticies.noticeArr} route='noticias' />
    </section>
  );
};
