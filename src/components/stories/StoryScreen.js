import 'moment/locale/es';
import React from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { CardScreen } from '../cards/CardScreen';
import { Pagination } from '../cards/Pagination';
export const StoryScreen = () => {
  const location = useLocation();
  const param = location.pathname.split('/')[1];

  const { storyArr } = useSelector((state) => state.story.stories);
  return (
    <section className='row'>
      <div className='col-md-12'>
        <Pagination selector={'story'} subSelector='stories' />
      </div>
      <CardScreen data={storyArr} route='historias' mode={param} />
    </section>
  );
};
