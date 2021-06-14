import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import {
  startstoryAddNew,
  storyClearActive,
  storyStartUpdated,
} from '../../../actions/events';
import { uiRemoveError, setError } from '../../../actions/authActios';

import './storyStyles.css';
import { FaSave } from 'react-icons/fa';

const initEvent = {
  title: '',
  body: '',
};
export const NewStory = () => {
  const history = useHistory();
  const { msgError } = useSelector((state) => state.error);
  const { activeStory } = useSelector((state) => state.story);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(initEvent);

  const { title, body } = formValue;
  useEffect(() => {
    if (activeStory) {
      setFormValue(activeStory);
    } else {
      setFormValue(initEvent);
    }
  }, [activeStory, setFormValue]);

  //manejo de los cambios de los inputs
  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };
  const handleSavedStory = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      if (activeStory) {
        setFormValue(initEvent);
        dispatch(storyStartUpdated(formValue));
      } else {
        dispatch(startstoryAddNew(formValue));
        setFormValue(initEvent);
      }
    }
  };

  const isFormValid = () => {
    if (validator.isEmpty(title)) {
      dispatch(setError('Titulo requiredo'));
      return false;
    }
    if (!validator.isLength(title, { min: 6 })) {
      dispatch(setError('Minimo 6 caracteres'));
      return false;
    }

    if (validator.isEmpty(body)) {
      dispatch(setError('Cuerpo de la historia requerido'));
      return false;
    }

    if (!validator.isLength(body, { min: 50, max: 2000 })) {
      dispatch(
        setError('el cuerpo debe conenter almenos 50 caracteres y maximo 2000')
      );
      return false;
    }
    dispatch(uiRemoveError());
    return true;
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-link font-weight-bolder animate__animated animate__fadeIn'
        style={{ fontSize: '15px' }}
        onClick={() => {
          dispatch(uiRemoveError());
          dispatch(storyClearActive());
          history.push('/profile/stories');
        }}
      >
        &#x2039; Volver
      </button>

      <form
        className='mb-3 shadow-p p-4 mb-5 animate__animated animate__fadeIn'
        onSubmit={handleSavedStory}
      >
        <fieldset>
          <legend className='font-weight-bold'>
            {activeStory ? 'Editar Notica' : 'Nueva Noticia'}
          </legend>

          <div
            className={`form-group ${
              (msgError.includes('Titulo') || msgError.includes('Minimo')) &&
              'has-danger'
            }`}
          >
            <label htmlFor='title' className='form-label mt-4 font-weight-bold'>
              Title
            </label>
            <input
              type='text'
              className={`form-control ${
                (msgError.includes('Titulo') || msgError.includes('Minimo')) &&
                'is-invalid'
              }`}
              id='title'
              value={title}
              name='title'
              onChange={handleInputChange}
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <span className='invalid-feedback'>
              {(msgError.includes('Titulo') || msgError.includes('Minimo')) &&
                msgError}
            </span>
          </div>
          <div
            className={`form-group ${
              (msgError.includes('Cuerpo') || msgError.includes('almenos')) &&
              'has-danger'
            }`}
          >
            <label
              htmlFor='noticebody'
              className='form-label mt-4 font-weight-bold'
            >
              Cuerpo de la noticia
            </label>
            <textarea
              type='text'
              className={`form-control ${
                (msgError.includes('Cuerpo') || msgError.includes('almenos')) &&
                'is-invalid'
              }`}
              id='noticebody'
              value={body}
              name='body'
              onChange={handleInputChange}
              placeholder='notica...'
              rows='5'
            ></textarea>
            <span className='invalid-feedback'>
              {(msgError.includes('Cuerpo') || msgError.includes('almenos')) &&
                msgError}
            </span>
          </div>
          <div className='mb-3'>
            <button type='submit' className='btn btn-info btn-lg  '>
              <FaSave size='1.5rem' className='mr-1' />{' '}
              {activeStory ? 'publicar cambios' : 'publicar'}
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
