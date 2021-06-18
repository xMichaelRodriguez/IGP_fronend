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
    <>
      {!!noticeArr && (
        <ul className='uk-list uk-list-divider animate__animated   animate__fadeIn'>
          {noticeArr.map((notice) => (
            <li
              className='list-group-item  flex-column align-items-start '
              key={notice.id}
            >
              <div
                className='uk-grid-column-small uk-grid-row-large '
                uk-grid=''
              >
                <div className='uk-padding-remove-bottom'>
                  <h5 className='uk-text-bold uk-text-large'>{`${notice.title.substr(
                    0,
                    70
                  )} ...`}</h5>
                </div>
                <div className='uk-text-left uk-text-emphasis'>
                  <small>{moment(notice.date).calendar()}</small>
                </div>
              </div>
              <p className='uk-text-break uk-text-muted'>{`${notice.body.substr(
                0,
                150
              )} ...`}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
