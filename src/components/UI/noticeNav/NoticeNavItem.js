import moment from 'moment';
import 'moment/locale/es';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { noticeSetActive } from '../../../actions/noticesActions';

export const NoticeNavItem = ({ title, body, date, id }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const notice = {
    title,
    body,
    date,
    id,
  };
  const handleNoticeActive = () => {
    if (location.pathname.includes('/profile')) {
      dispatch(noticeSetActive(notice));
    }
  };
  return (
    <div className=' uk-card uk-card-default uk-card-body uk-card-hover animate__animated   animate__fadeIn'>
      <div onDoubleClick={handleNoticeActive}>
        <h3 className='uk-card-title'>{title}</h3>
        <span>{moment(date).calendar()}</span>
        <p>{`${body.substr(0, 100)}...`}</p>
        {!location.pathname.includes('/profile') && (
          <div className=''>
            <Link className='uk-button uk-button-text' to={`/noticies/${id}`}>
              Leer Mas...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
