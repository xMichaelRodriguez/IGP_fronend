import React from 'react';
import ReactLoading from 'react-loading';
export const WaitScreen = () => {
  return (
    <div className='d-flex justify-content-center p-5'>
      <h1>Espere...</h1>
      <ReactLoading type='spin' color='#6a1576' />
    </div>
  );
};
