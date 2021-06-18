import React from 'react';
import { BsCaretRightFill, BsEnvelope } from 'react-icons/bs';
import { useHistory } from 'react-router';
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
  const history = useHistory();
  return (
    <div className='uk-width-1-3@s'>
      <div class='uk-card uk-card-default uk-card-body uk-padding-remove'>
        <div class='uk-card-media-left uk-cover-container'>
          <img
            src={
              !avatar_file_url.includes('missing')
                ? `https://www.transparencia.gob.sv/${avatar_file_url}`
                : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
            }
            alt={avatar_file_name}
            uk-cover=''
          />
          <canvas width='600' height='400'></canvas>
        </div>
        <div className='uk-card-body'>
          <h3 className='uk-card-title '>
            <Link
              className='uk-link text-primary'
              to={`/organizations/${acronym}`}
            >
              {acronym}
            </Link>
          </h3>
          <small className='uk-text-muted'>{name}</small>
          <dl className='uk-description-list '>
            <dt className='uk-text-capitalize'>Oficial de información:</dt>
            <dd>{officer_name}</dd>
            <dt className='uk-text-capitalize'>Correo:</dt>
            <dd>{officer_email}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};
