import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StorySetActive } from '../../../actions/events';
export const StoryNavItem = ({ title, body, date, id }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const story = {
    title,
    body,
    date,
    id,
  };
  const handleStoryActive = () => {
    if (location.pathname.includes('/profile')) {
      dispatch(StorySetActive(story));
    }
  };

  return (
    <div className=' uk-card uk-card-default uk-card-body uk-card-hover animate__animated   animate__fadeIn'>
      <div onDoubleClick={handleStoryActive}>
        <h3 className='uk-card-title'>{title}</h3>
        <span>{moment(date).calendar()}</span>
        <p>{`${body.substr(0, 100)}...`}</p>
        {!location.pathname.includes('/profile') && (
          <div className=''>
            <Link className='uk-button uk-button-text' to={`/stories/${id}`}>
              Leer Mas...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
