import 'moment/locale/es';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { noticeStartLoading } from '../../actions/noticesActions';

import CardScreen from '../cards/CardScreen';
import SectionPaginate from '../cards/SectionPaginate.jsx';

import DatePickerScreen from './DatePickerScreen';

const NoticeScreen = () => {
  const { noticies } = useSelector((state) => state.notice);
  const location = useLocation();
  const history = useHistory();
  const param = location.pathname.split('/')[1];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(noticeStartLoading({}));
  }, [dispatch]);
  return (
    <div className='animate__animated animate__fadeIn'>
      {noticies === [] && !noticies && (
        <h3 className='display-4'>No Hay Noticias</h3>
      )}
      <DatePickerScreen rute='notice' />
      <SectionPaginate />
      <CardScreen
        data={noticies !== [] && noticies}
        route='noticias'
        mode={param}
        history={history}
      />
    </div>
  );
};
export default NoticeScreen;
