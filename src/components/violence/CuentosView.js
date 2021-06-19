import React from 'react';

export const CuentosView = () => {
  return (
    <div className='uk-card uk-card-default uk-margin animate__animated   animate__fadeIn'>
      <div className='uk-column-1-1 uk-padding uk-text-center '>
        <iframe
          title='Cuentos'
          src='https://www.youtube.com/embed/eqA-rVwSZk8'
          width='600'
          height='400'
          frameBorder='0'
          allowFullScreen=''
          uk-responsive=''
        ></iframe>
      </div>
    </div>
  );
};
