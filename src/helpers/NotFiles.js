import React from 'react';
import emptyImage from './undraw_empty_xct9.svg';

const NotFiles = () => {
  return (
    <img
      src={emptyImage}
      className='img-fluid w-50'
      alt={emptyImage.toString()}
    />
  );
};
export default NotFiles;
