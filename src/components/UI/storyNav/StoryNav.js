import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storyStartLoading } from '../../../actions/events';

import { StoryNavItem } from './StoryNavItem';

const INITIAL_PAGE = 1;

export const StoryNav = () => {
  const { storyArr, total_page } = useSelector((state) => state.story.stories);
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

  return (
    !!storyArr && (
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
          {storyArr.map((story) => (
            <div className='uk-width-1-3@m' key={story.id}>
              <StoryNavItem {...story} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};
