import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {
  setError,
  uiRemoveError,
} from '../../actions/authActios';

import validator from 'validator';
import {
  startstoryAddNew,
  storyClearActive,
  storyStartUpdated,
} from '../../actions/events';
import {
  noticeClearActive,
  noticetStartUpdated,
  startnoticeAddNew,
} from '../../actions/noticesActions';
import { FaCloudUploadAlt } from 'react-icons/fa';

const initialForm = {
  title: '',
  body: '',
  imageUrl: '',
  date: new Date(),
  publicImg_id: '',
};
export const ManageScreen = () => {
  const dispatch = useDispatch();
  const refImage = useRef(null);
  const { token } = useParams();
  const history = useHistory();
  const { msgError } = useSelector((state) => state.error);
  const { activeNotice } = useSelector(
    (state) => state.notice
  );
  const { activeStory } = useSelector(
    (state) => state.story
  );
  const [formValue, setFormValue] = useState(initialForm);

  useEffect(() => {
    if (token === 'noticias' && activeNotice) {
      setFormValue(activeNotice);
    } else if (token === 'historias' && activeStory) {
      setFormValue(activeStory);
    }
  }, [token, activeNotice, activeStory]);

  // Manejo de los cambios en el valor de los inputs
  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };
  // maneja el cambio del input file
  const handleImage = (e) => {
    const image = e.target.files[0];
    let readFile = new FileReader();
    let img = refImage.current;

    if (image) {
      setFormValue({
        ...formValue,
        imageUrl: image,
      });

      readFile.readAsDataURL(image);
      readFile.onloadend = function () {
        img.src = readFile.result;
      };
    }
  };

  const handlePicture = () => {
    document.getElementById('fileSelector').click();
  };
  // validacion del formulario
  const isFormValid = () => {
    if (validator.isEmpty(formValue.title)) {
      dispatch(setError('Titulo requiredo'));
      return false;
    }
    if (!validator.isLength(formValue.title, { min: 20 })) {
      dispatch(setError('Minimo 20 caracteres'));
      return false;
    }

    if (
      !validator.isLength(formValue.body, {
        min: 50,
        max: 2000
      })
    ) {
      dispatch(
        setError('Cuerpo de la publicacion requerido, minimo 50 caracteres, maximo de 2000')
      );
      return false;
    }

    if (token === 'historias' && !formValue.imageUrl) {
      dispatch(setError('imagen requerida'));
      return false;
    }
    dispatch(uiRemoveError());
    return true;
  };

  // agregar o modificar una historia o noticia
  const handleSaveOrModifiedItem = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      if (token === 'noticias' && activeNotice) {
        // actualiza una noticia
        dispatch(
          noticetStartUpdated(formValue)
        );

        dispatch(noticeClearActive());
        setFormValue(initialForm);

      } else if (token === 'noticias' && !activeNotice) {
        // agrega una noticia
        dispatch(
          startnoticeAddNew(formValue)
        );
        dispatch(noticeClearActive());
        setFormValue(initialForm);


      } else if (token === 'historias' && activeStory) {
        // editar una historia
        dispatch(storyStartUpdated(formValue))
        setFormValue(initialForm);

      } else if (token === 'historias' && !activeStory) {
        dispatch(startstoryAddNew(formValue))
        setFormValue(initialForm)
      }
    }
  };

  // limpieza de inputs al salir del formulario
  const handleClearMessagesInputs = () => {
    dispatch(storyClearActive());
    dispatch(noticeClearActive());
    dispatch(uiRemoveError());
    setFormValue(initialForm);
    history.goBack();
  };

  return (
    <div className='container'>
      <form
        className='card shadow-sm p-3 mt-3'
        onSubmit={handleSaveOrModifiedItem}
        method='post'
      >
        <div className='form-group'>
          <button
            className='btn btn-link'
            type='button'
            onClick={handleClearMessagesInputs}
          >
            Volver
          </button>
        </div>
        <div className='form-group '>
          <label htmlFor='title'>Titulo</label>
          <input
            type='text'
            className={`form-control ${msgError.includes('Titulo') ||
              msgError.includes('Minimo')
              ? 'is-invalid'
              : ''
              }`}
            name='title'
            value={formValue.title}
            onChange={handleInputChange}
            placeholder='titulo'
            autoComplete='off'
          />
          {msgError.includes('Titulo') ||
            msgError.includes('Minimo') ? (
            <div className='invalid-feedback'>
              {msgError}
            </div>
          ) : null}
        </div>
        <div className='form-group'>
          <label htmlFor='cuerpo'>Cuerpo</label>
          <textarea
            className={`form-control ${msgError.includes('Cuerpo') ||
              msgError.includes('debe')
              ? 'is-invalid'
              : ''
              }`}
            name='body'
            rows='5'
            value={formValue.body}
            onChange={handleInputChange}
          ></textarea>
          {msgError.includes('Cuerpo') ||
            msgError.includes('debe') ? (
            <div className='invalid-feedback'>
              {msgError}
            </div>
          ) : null}
        </div>
        {token === 'historias' && (
          <>
            <div className='form-group'>
              <input
                type='file'
                style={{ display: 'none' }}
                id='fileSelector'
                name='fileSelector'
                onChange={handleImage}
              />
              <button
                className='btn  mb-3'
                onClick={handlePicture}
                type='button'
              >
                <FaCloudUploadAlt /> Subir Imagen
              </button>
              {msgError.includes('imagen') && (
                <div
                  className='alert alert-danger'
                  role='alert'
                >
                  {msgError}
                </div>
              )}
            </div>
            <div
              className='card p-0 mb-3'
              style={{
                width: '50%',
                height: '50%',
                display: `${formValue.imageUrl ? 'block' : 'none'
                  }`,
              }}
            >
              <div className='card-img-top '>
                <div className='text-center'>
                  <img
                    ref={refImage}
                    src={formValue.imageUrl}
                    className='rounded img-thumbnail shadow-2-strong'
                    alt='+++o'
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className='form-group'>
          <button className='btn primary' type='submit'>
            {activeNotice || activeStory
              ? 'Modificar'
              : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
};
