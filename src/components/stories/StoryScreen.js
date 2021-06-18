import moment from 'moment';
import 'moment/locale/es';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { storyStartLoading } from '../../actions/events';
export const StoryScreen = () => {
  const { storyArr } = useSelector((state) => state.story.stories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storyStartLoading({}));
  }, [dispatch]);

  return (
    <ul className='uk-list uk-list-divider animate__animated   animate__fadeIn'>
      {storyArr.length !== 0 &&
        storyArr.map((story) => (
          <li key={story.id}>
            <div className='uk-grid-column-small uk-grid-row-large ' uk-grid=''>
              <div className='uk-padding-remove-bottom'>
                <h5 className='uk-text-bold uk-text-large'>{`${story.title.substr(
                  0,
                  70
                )} ...`}</h5>
              </div>
              <div className='uk-text-left uk-text-emphasis'>
                <small>{moment(story.date).calendar()}</small>
              </div>
            </div>

            <p className='uk-text-break uk-text-muted'>{`${story.body.substr(
              0,
              150
            )} ...`}</p>
          </li>
        ))}
    </ul>
  );
};
