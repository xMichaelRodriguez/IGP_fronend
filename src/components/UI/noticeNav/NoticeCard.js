import moment from 'moment';
import 'moment/locale/es';

import React, { useEffect, useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchSync } from '../../../helpers/fetching';

export const NoticeCard = () => {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState({});
  useEffect(() => {
    (async function () {
      const data = await fetchSync(`noticies/${noticeId}`);
      const body = await data.json();

      if (body.ok) {
        delete body.ok;
        setNotice(body.noticies);
      }
    })();
  }, [noticeId]);
  return (
    notice !== {} && (
      <div
        style={{
          margin: '20px',
          padding: '10px',
          width: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className=' uk-card uk-card-default uk-card-body uk-width-1-2@m animate__animated   animate__fadeIn '>
          <div className='uk-card-title'>
            <h1>{notice.title}</h1>
            <h6 className='text-muted'>{moment(notice.date).calendar()}</h6>
          </div>

          <p className='uk-text-justify' style={{ fontSize: '20px' }}>
            {notice.body}
          </p>

          <div className=''>
            <Link className='uk-button uk-button-text' to='/noticies'>
              <BsArrowReturnLeft size='1.5rem' /> Volver
            </Link>
          </div>
        </div>
      </div>
    )
  );
};
