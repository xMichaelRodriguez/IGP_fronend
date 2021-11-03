import React from 'react';
import { useHistory } from 'react-router';
import homeWorkImage from '../../../img/homeworkimg.svg';

const HomeWork = ({ title }) => {
  const history = useHistory();
  return (
    <div
      className='card bg-dark text-white'
      style={{ cursor: 'pointer' }}
      onClick={() => history.push('/biblioteca/deberes')}
    >
      <img className='card-img' src={homeWorkImage} alt='Card homework' />
      <div className='card-img-overlay'>
        <h5 className='card-title'>{title}</h5>
      </div>
    </div>
  );
};
export default HomeWork;
