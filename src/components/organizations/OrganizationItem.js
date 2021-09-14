import React from 'react';

import { Link } from 'react-router-dom';
export const OrganizationItem = ({
  name,
  acronym,
  avatar_file_name,
  twitter_url,
  officer_email,
  officer_name,
  youtube_url,
  avatar_file_url,
  website_url,
}) => {
  return (
    <div className='col-md-4 '>
      <div className='card mb-3 animate__animated animate__fadeIn'>
        <img
          src={
            !avatar_file_url.includes('missing')
              ? `https://www.transparencia.gob.sv/${avatar_file_url}`
              : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
          }
          alt={avatar_file_name}
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title'>
            <Link
              className='uk-link text-primary'
              to={`/organizaciones/${acronym}`}
            >
              {acronym}
            </Link>
          </h5>
          <small className='card-subtitle text-muted'>{name}</small>
          <div className='card-text mt-2'>
            <blockquote className='blockquote'>
              <p className='mb-0 text-dark'>Oficial De Información: {officer_name}</p>
              <footer className='blockquote-footer '>
                Correo: {officer_email}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
