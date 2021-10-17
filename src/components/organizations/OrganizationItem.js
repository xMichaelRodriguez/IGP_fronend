import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const OrganizationItem = (props) => {
  return (
    <div className='card shadow-sm   text-dark mb-3 animate__animated animate__fadeIn'>
      <img
        src={props.image_url}
        alt={props.image_url}
        className='card-img'
        style={{ maxHeight: "267px" }}
      />

      <div className='card-body'>
        <h5 className='card-title'>
          <Link
            className='text-link '
            to={`/organizaciones/${props.acronym}`}
          >
            {props.acronym}
          </Link>
        </h5>

        <p className='card-text'>
          <small className='text-muted'>
            Correo: {props.officer_email}
          </small>
        </p>
      </div>
    </div>
  );
};

OrganizationItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  acronym: PropTypes.string.isRequired,
  officer_email: PropTypes.string.isRequired,
  officer_name: PropTypes.string.isRequired,
  redes: PropTypes.object.isRequired,
  website_url: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  horarios: PropTypes.array.isRequired,
  telefonos: PropTypes.array.isRequired,
};
