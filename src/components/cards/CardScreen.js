import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import moment from 'moment';
export const CardScreen = ({ data, route }) => {
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
                <Link to={`/${route}/${d.id}`} className='btn btn-link'>
                  Leer Ahora
                </Link>
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
};
