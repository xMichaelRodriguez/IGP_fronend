import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {
  noticeSetActive,
  startnoticeDeleted,
} from '../../actions/noticesActions';
import { startstoryDeleted, StorySetActive } from '../../actions/events';

const CardScreen = ({ data, route, mode, history }) => {
  const dispatch = useDispatch();

  const handleEdit = (noticeOrStory, routes) => {
    if (route === 'noticias') {
      dispatch(noticeSetActive(noticeOrStory));
      history.push(`/profile/mantenimiento/${routes}`);
    } else if (route === 'historias') {
      dispatch(StorySetActive(noticeOrStory));
      history.push(`/profile/mantenimiento/${routes}`);
    }
  };
  const handleDelete = (noticeOrStory, routes) => {
    if (routes === 'noticias') {
      dispatch(startnoticeDeleted(noticeOrStory));
    } else if (routes === 'historias') {
      dispatch(startstoryDeleted(noticeOrStory));
    }
  };

  const ComponentLoadingData = () => {
    if (data === [] || data === undefined || data === null) {
      return <h3 className='display-4'>No se encontraron Historias</h3>;
    }
    return Object.entries(data).length !== 0 ? (
      data.map((d) => (
        <div className='col-md-4  ' key={d.id}>
          <div
            className='card mb-3 shadow'
            style={{ maxHeight: '400px', height: '390px' }}
          >
            <img
              src={d.imageUrl}
              className='card-img-top'
              style={{ maxHeight: '12em' }}
              alt={d.imageUrl}
            />
            <div className='card-body'>
              <span className='badge bg-info text-light mb-2'>
                {moment(d.date).calendar()}
              </span>
              <h5 className='card-title'>{d.title}</h5>

              {mode === 'profile' ? (
                <>
                  <button
                    className='btn primary btn-sm dropdown-toggle'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Opciones
                  </button>
                  <div className='dropdown-menu'>
                    <button
                      className='btn btn-secondary dropdown-item'
                      type='button'
                      onClick={() => handleEdit(d, route)}
                    >
                      Modificar
                    </button>
                    <button
                      className='btn btn-danger dropdown-item'
                      type='button'
                      onClick={() => handleDelete(d.id, route)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              ) : (
                <Link to={`/${route}/${d.id}`} className='btn btn-link'>
                  Leer M??s
                </Link>
              )}
            </div>
          </div>
        </div>
      ))
    ) : (
      <h3 className='display-4'>No se encontraron Historias</h3>
    );
  };
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <ComponentLoadingData />
        </div>
      </div>
    </div>
  );
};

CardScreen.propTypes = {
  data: Proptypes.array.isRequired,
  route: Proptypes.string.isRequired,
  mode: Proptypes.string.isRequired,
};
export default CardScreen;
