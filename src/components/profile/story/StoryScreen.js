import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { storyStartLoading, storyClearActive } from '../../../actions/events';
import { DeleteButtonFab } from '../../UI/DeleteButtonFab';
import { StoryNavItem } from '../../UI/storyNav/StoryNavItem';
// icons
import { BsPlus } from 'react-icons/bs';

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
  const [pageNext, setPageNext] = useState(INITIAL_PAGE);

  useEffect(() => {
    dispatch(storyStartLoading({}));
  }, [dispatch]);

  const handleNewStory = () => {
    dispatch(storyClearActive());
    history.push('/profile/manage-story');
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
  }, [dispatch, pageNext]);

  return (
    <>
      <button
        className='uk-button primary mb-3  animate__animated animate__fadeIn'
        onClick={handleNewStory}
      >
        <BsPlus size='1.5rem' /> &nbsp; Nueva historia
      </button>
      <hr className='uk-divider-icon' />

      {storyArr && storyArr.length !== 0 && (
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
            {storyArr.map((story) => (
              <div className='uk-width-1-3@m' key={story.id}>
                <StoryNavItem {...story} key={story.id} />
              </div>
            ))}
          </div>
        </>
      )}

      {activeStory && <DeleteButtonFab />}
    </>
  );
};
