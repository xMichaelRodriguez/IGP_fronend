import moment from 'moment';
import 'moment/locale/es';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noticeStartLoading } from '../../actions/noticesActions';

export const NoticeScreen = () => {
  const { noticeArr } = useSelector((state) => state.notice.noticies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(noticeStartLoading({}));
  }, [dispatch]);

  return (
    <div>
      {!!noticeArr && (
        <div className='list-group animate__animated   animate__fadeIn'>
          {noticeArr.map((notice) => (
            <span
              className='list-group-item  flex-column align-items-start '
              key={notice.id}
            >
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>{notice.title}</h5>
                <small>{moment(notice.date).calendar()}</small>
              </div>
              <p className='mb-1'>{`${notice.body.substr(0, 100)} ...`}</p>
              <small>Donec id elit non mi porta.</small>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
