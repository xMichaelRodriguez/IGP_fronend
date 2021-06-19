import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { startstoryDeleted, storyClearActive } from '../../actions/events';
import {
  noticeClearActive,
  startnoticeDeleted,
} from '../../actions/noticesActions';
//css
import '../UI/styles.css';
//icons
import { FaEdit, FaTimes, FaTrash } from 'react-icons/fa';
export const DeleteButtonFab = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { activeNotice } = useSelector((state) => state.notice);
  const { activeStory } = useSelector((state) => state.story);

  useEffect(() => {
    if (!location.pathname.includes('noticies')) {
      dispatch(noticeClearActive());
    } else if (!location.pathname.includes('stories')) {
      dispatch(storyClearActive());
    }
  }, [location, dispatch]);
  const handleDelete = () => {
    if (activeNotice && location.pathname.includes('noticies')) {
      dispatch(startnoticeDeleted());
    }

    if (activeStory && location.pathname.includes('stories')) {
      dispatch(startstoryDeleted());
    }
  };
  const handleClear = () => {
    if (location.pathname.includes('/noticies')) {
      dispatch(noticeClearActive());
    } else if (location.pathname.includes('/stories')) {
      dispatch(storyClearActive());
    }
  };

  const handleEdit = () => {
    if (location.pathname.includes('stories')) {
      history.push('/profile/manage-story');
    } else if (location.pathname.includes('noticies')) {
      history.push('/profile/manage-notice');
    }
  };

  return (
    <div
      className='uk-button-group animate__animated animate__fadeInUp'
      style={{ position: 'fixed', left: '20px', bottom: '80px' }}
      role='group'
      aria-label='Basic example'
    >
      <button
        type='button'
        className='uk-button uk-button-danger'
        onClick={handleDelete}
      >
        <FaTrash />
        <span> Borrar</span>
      </button>
      <button
        type='button'
        className='uk-button uk-button-sencundary'
        onClick={handleEdit}
      >
        <span>Editar </span>
        <FaEdit />
      </button>
      <button type='button' className='uk-button primary' onClick={handleClear}>
        <span>Cancelar </span>
        <FaTimes />
      </button>
    </div>
  );
};
