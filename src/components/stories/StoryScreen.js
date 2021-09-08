import 'moment/locale/es';
import React from 'react';

import {  useSelector } from 'react-redux';
import { CardScreen } from '../cards/CardScreen';
import { Pagination } from '../cards/Pagination';
export const StoryScreen = () => {
  const { storyArr } = useSelector((state) => state.story.stories);
  return (
    <section className='row'>
      <div className='col-md-12'>
        <Pagination selector={'story'} subSelector='stories' />
      </div>
      <CardScreen data={storyArr} route='historias' />
    </section>
  );
};
