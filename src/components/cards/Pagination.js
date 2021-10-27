import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types'
import { storyStartLoading } from '../../actions/events';
import { noticeStartLoading } from '../../actions/noticesActions';
import { startLoadingForums } from '../../actions/forumsAction';



export const Pagination = ({ selector }) => {
  const { nextPage, prevPage, totalPages } = useSelector((state) => state[selector]);

  const [active, setActive] = useState(1)
  const dispatch = useDispatch();

  //next Page
  const handleNextPage = () => {
    if (nextPage !== null) {
      setActive(nextPage)
      if (selector === 'notice') {
        dispatch(noticeStartLoading({ page: nextPage }))
      } else if (selector === 'story') {
        dispatch(storyStartLoading({ page: nextPage }))
      } else if (selector === 'userForum') {
        dispatch(startLoadingForums({ page: nextPage }))
      }
    }
  };

  //previus page
  const handlePrevpage = () => {
    if (prevPage !== null) {
      setActive(prevPage)
      if (selector === 'notice') {
        dispatch(noticeStartLoading({ page: prevPage }))
      } else if (selector === 'story') {
        dispatch(storyStartLoading({ page: prevPage }))
      } else if (selector === 'userForum') {
        dispatch(startLoadingForums({ page: prevPage }))
      }
    }
  };



  const PageLink = () => {
    const pages = totalPages;
    const pageArr = [];
    for (let index = 1; index <= pages; index++) {
      pageArr.push(index);
    }

    return pageArr.map((page, index) => (
      <li
        key={index}
        className={`page-item  ${active === page ? 'active' : ''
          }`}
      >
        <p className='page-link disabled'>{page}</p>
      </li>
    ));
  };
  return (
    <div className='row mb-4'>
      <div className='col-md-12'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li
              className={`page-item ${prevPage === null ? 'disabled' : ''
                }`}
              onClick={handlePrevpage}
            >
              <p className='page-link'>Anterior</p>
            </li>
            <PageLink />

            <li
              className={`page-item ${nextPage === null
                ? 'disabled'
                : ''
                }`}
              onClick={handleNextPage}
            >
              <p className='page-link'>Siguiente</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  selector: PropTypes.string.isRequired
}
