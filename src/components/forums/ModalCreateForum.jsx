import React from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import validator from 'validator';
import { setError, uiRemoveError } from '../../actions/authActios';
import { StartActiveForum } from '../../actions/forumsAction';
import { uiCloseModal } from '../../actions/uiActions';
import useForm from '../../hooks/useForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const ModalCreateForum = () => {
  const { msgError } = useSelector((state) => state.error);

  const { modalOpen } = useSelector((state) => state.UI);
  const dispatch = useDispatch();

  const [formValue, handleInputChange, reset] = useForm({
    theme: '',
    content: '',
  });
  const { theme, content } = formValue;

  const isValid = () => {
    if (validator.isEmpty(theme)) {
      dispatch(setError('El "Tema" para el foro es oblicatorio'));
      return false;
    }

    if (validator.isEmpty(content)) {
      dispatch(setError('El "Contenido" para el foro es obligatorio'));
      return false;
    }

    dispatch(uiRemoveError());
    return true;
  };

  const handleSaveForum = (e) => {
    e.preventDefault();
    if (isValid()) {
      dispatch(StartActiveForum(formValue));
      reset();
    }
  };

  const closeModal = () => {
    // TODO: cerrar el modal
    dispatch(uiRemoveError());
    dispatch(uiCloseModal());
    reset();
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className='modal'
      overlayClassName='modal-fondo'
    >
      <div className='p-3'>
        <h3 className='mb-3'>Nuevo Foro</h3>
        <hr />
        <form className='container needs-validation'>
          <div className='form-group'>
            <label htmlFor='titleForo'>Tema del foro</label>
            <input
              type='text'
              className={`form-control mb-2  ${
                msgError.includes('El "Tema"') ? 'is-invalid' : ''
              } `}
              id='titleForo'
              aria-describedby='foroHelp'
              name='theme'
              value={theme}
              onChange={handleInputChange}
            />
            {msgError.includes('El "Tema"') && (
              <small className='invalid-feedback'>{msgError}</small>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='contenido'>Contenido del foro</label>
            <textarea
              className={`form-control mb-2 ${
                msgError.includes('El "Contenido"') ? 'is-invalid' : ''
              } `}
              id='contenido'
              rows='5'
              name='content'
              value={content}
              onChange={handleInputChange}
            ></textarea>
            {msgError.includes('El "Contenido"') && (
              <small className='invalid-feedback'>{msgError}</small>
            )}
          </div>

          <button
            className='btn primary'
            type='submit'
            onClick={handleSaveForum}
          >
            Publicar Foro
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default ModalCreateForum;
