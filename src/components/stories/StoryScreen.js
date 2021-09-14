import 'moment/locale/es';
import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { CardScreen } from '../cards/CardScreen';
import { Pagination } from '../cards/Pagination';
export const StoryScreen = () => {
  const location = useLocation();
  const param = location.pathname.split('/')[1];
  const history = useHistory();
  const { storyArr } = useSelector((state) => state.story.stories);
  return (
    <section className=''>
      <div className='row'>
        {param === 'profile' ? (
          <>
            <div className='col-md-6'>
              <Pagination selector={'story'} subSelector='stories' />
            </div>

            <div className='col-md-6'>
              <button
                className='btn primary--button btn-block mb-3'
                type='button'
                onClick={() => {
                  history.push('/profile/mantenimiento/historias');
                }}
              >
                Nueva Historia
              </button>
            </div>
          </>
        ) : (
          <div className='col-md-12 animate__animated animate__fadeIn'>
            <Pagination selector={'story'} subSelector='stories' />
          </div>
        )}
      </div>
      <div className='row animate__animated animate__fadeIn row'>
        <CardScreen
          data={storyArr !== [] && storyArr}
          route='historias'
          mode={param}
          history={history}
        />
      </div>
    </section>
  );
};
