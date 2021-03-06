import React from 'react';

import './styleAnimation.css';
import LearnImage from '../../img/undraw_book_reading_kx9s.svg';

const HeroScreen = () => {
  return (
    <div className='container-fluid primary  py-5 '>
      <div className='container py-5'>
        <div className='row '>
          <div className=' col-md-6 mb-3'>
            <h3 className='font-weight-bold display-4'>
              Una Vida Segura Enseña
            </h3>
            <p className=' lead mb-3'>
              Enriquece el proceso de enseñanza sobre temas de violencia y abuso
              de niños, niñas y adolescentes atravez del uso de una web app
            </p>
          </div>
          <div className='col-md-6'>
            <img
              className='img-fluid float-right
               animatioFloat'
              src={LearnImage}
              width=''
              height=''
              alt='learn svg'
              title='Learn svg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroScreen;
