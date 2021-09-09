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
export const CardScreen = ({ data, route, mode }) => {
  const dispatch = useDispatch();

  const handleEdit = (data, route) => {
    if (route === 'noticias') {
      dispatch(noticeSetActive(data));
    } else {
      dispatch(StorySetActive(data));
    }
  };
  const handleDelete = (data, route) => {
    if (route === 'noticias') {
      dispatch(startnoticeDeleted(data));
    } else {
      dispatch(startstoryDeleted(data));
    }
  };

  const ComponentLoadingData = () => {
    if (Object.entries(data).length === 0) {
      return (
        <div className='text-center'>
          <div className='spinner-grow' role='status'>
            <span className='sr-only'>Cargando...</span>
          </div>
        </div>
      );
    } else {
      return (
        Object.entries(data).length !== 0 &&
        data.map((d) => (
          <div className='col-md-4' key={d.id}>
            <div className='card mb-3 shadow-sm'>
              {/* <img src='...' className='card-img-top' alt='...' /> */}
              <div className='card-body'>
                <h5 className='card-title'>{d.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {moment(d.date).calendar()}
                </h6>
                <p className='card-text text-justify'>
                  {d.body.substr(0, 140)}...
                </p>
                {mode === 'profile' ? (
                  <>
                    <button
                      className='btn btn-primary btn-sm dropdown-toggle'
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
                    Leer Ahora
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))
      );
    }
  };
  return <ComponentLoadingData />;
};

CardScreen.propTypes = {
  data: Proptypes.array.isRequired,
  route: Proptypes.string.isRequired,
  mode: Proptypes.string.isRequired,
};
