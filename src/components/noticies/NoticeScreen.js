import 'moment/locale/es';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { CardScreen } from '../cards/CardScreen';
import { Pagination } from '../cards/Pagination';

export const NoticeScreen = () => {
  const { noticeArr } = useSelector((state) => state.notice.noticies);
  const location = useLocation();
  const param = location.pathname.split('/')[1];

  return (
    <section className='row'>
      <div className='col-md-12'>
        <Pagination selector={'notice'} subSelector='noticies' />
      </div>
      <CardScreen data={noticeArr} route='noticias' mode={param} />
    </section>
  );
};
