import React from 'react';
import ReactLoading from 'react-loading';

const WaitScreen = () => {
  return (
    <div className='d-flex justify-content-center p-5'>
      <p className='display-5'>Espere...</p>{' '}
      <ReactLoading type='spin' color='#8f77f2' />
    </div>
  );
};
export default WaitScreen;
