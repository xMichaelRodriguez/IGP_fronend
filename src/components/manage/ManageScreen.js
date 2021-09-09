import React from 'react';

export const ManageScreen = () => {
  return (
    <form className='card shadow-sm p-3'>
      <div className='form-group'>
        <label for='title'>Titulo</label>
        <input
          type='text'
          className='form-control'
          id='title'
          placeholder='titulo'
          autoComplete='off'
        />
      </div>
      <div className='form-group'>
        <label for='cuerpo'>Cuerpo</label>
        <textarea className='form-control' id='cuerpo' rows='5'></textarea>
      </div>
      <div className='form-group'>
        <button className='btn primary--button'>Guardar</button>
      </div>
    </form>
  );
};
