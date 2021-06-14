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
    <div className='card mt-2  animate__animated   animate__fadeIn'>
      <div className='card-body' onDoubleClick={handleNoticeActive}>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-subtitle text-muted mt-2'>
          <h6>{moment(date).calendar()}</h6>
        </div>
        <div className='card-text'>
          <p>{`${body.substr(0, 100)}...`}</p>
        </div>
        {!location.pathname.includes('/profile') && (
          <div className='card-link mt-2'>
            <Link className='btn btn-link' to={`/noticies/${id}`}>
              Leer Mas...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
