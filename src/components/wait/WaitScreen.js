import React from 'react';
import ReactLoading from 'react-loading';
export const WaitScreen = () => {
  return (
    <div className='d-flex justify-content-center'>
      <h1>Espere...</h1>
      <ReactLoading type='bars' color='#6a1576' height={'20%'} width={'50%'} />
    </div>
  );
};
