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
import { FaChevronLeft, FaSave } from 'react-icons/fa';

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
        className='uk-button uk-button-text uk-text-bold animate__animated animate__fadeIn'
        style={{ fontSize: '15px' }}
        onClick={() => {
          dispatch(uiRemoveError());
          dispatch(storyClearActive());
          history.push('/profile/stories');
        }}
      >
        <FaChevronLeft /> Volver
      </button>

      <form
        className='uk-card uk-card-default uk-margin uk-padding animate__animated animate__fadeIn'
        onSubmit={handleSavedStory}
      >
        <legend className='uk-text-bold'>
          {activeStory ? 'Editar Notica' : 'Nueva Noticia'}
        </legend>

        <div className='uk-margin'>
          <label htmlFor='title' className='uk-form-label'>
            Title
          </label>
          <input
            type='text'
            className={`uk-input ${
              (msgError.includes('Titulo') || msgError.includes('Minimo')) &&
              'uk-form-danger'
            }`}
            id='title'
            value={title}
            name='title'
            onChange={handleInputChange}
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
          <span className='uk-label uk-label-danger'>
            {(msgError.includes('Titulo') || msgError.includes('Minimo')) &&
              msgError}
          </span>
        </div>
        <div className='uk-margin'>
          <label htmlFor='noticebody' className='uk-form-label'>
            Cuerpo de la noticia
          </label>
          <textarea
            type='text'
            className={`uk-textarea ${
              (msgError.includes('Cuerpo') || msgError.includes('almenos')) &&
              'uk-form-danger'
            }`}
            id='noticebody'
            value={body}
            name='body'
            onChange={handleInputChange}
            placeholder='notica...'
            rows='5'
          ></textarea>
          <span className='uk-label uk-label-danger'>
            {(msgError.includes('Cuerpo') || msgError.includes('almenos')) &&
              msgError}
          </span>
        </div>
        <div className='uk-margin'>
          <button type='submit' className='uk-button primary uk-width-1-1 '>
            <FaSave size='1.5rem' className='mr-1' />{' '}
            {activeStory ? 'publicar cambios' : 'publicar'}
          </button>
        </div>
      </form>
    </>
  );
};
