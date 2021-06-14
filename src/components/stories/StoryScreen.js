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
    <div className='list-group animate__animated   animate__fadeIn'>
      {storyArr.length !== 0 &&
        storyArr.map((story) => (
          <span
            key={story.id}
            className='list-group-item flex-column align-items-start '
          >
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>{story.title}</h5>
              <small>{moment(story.date).calendar()}</small>
            </div>
            <p className='mb-1 px-1 text-break'>{`${story.body.substr(
              0,
              100
            )} ...`}</p>
          </span>
        ))}
    </div>
  );
};
