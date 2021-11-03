import React from 'react';

const ToggleButton = () => {
  return (
    <button
      className='navbar-toggler btn'
      type='button'
      data-toggle='collapse'
      data-target='#navbarText'
      aria-controls='navbarText'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
  );
};
export default ToggleButton;
