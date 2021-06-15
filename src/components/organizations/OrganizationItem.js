import React from 'react';
import { BsCaretRightFill, BsEnvelope } from 'react-icons/bs';
import { useHistory } from 'react-router';
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
    <div className='col-md-4 mb-3'>
      <div className='card mt-2 animate__animated   animate__fadeIn'>
        <div className='card-body'>
          <div className='card-title'>
            <h3
              className='text-info btn-link'
              style={{ cursor: 'pointer' }}
              onClick={() => history.push(`/organizations/${acronym}`)}
            >
              {acronym}
            </h3>
          </div>
          <div className='card-subtitle mb-2'>
            <span>{name}</span>
          </div>
          <div className='card-text' style={{ fontSize: '14px' }}>
            <ul className='list-group' style={{ listStyle: 'none' }}>
              <li className='mb-2'>
                <BsCaretRightFill className='text-info' />{' '}
                <span className='font-weight-bolder'>
                  Oficial de información:
                  {officer_name}
                </span>
              </li>
              <li className='mb-2'>
                <BsEnvelope className='text-info' />{' '}
                <span className='font-weight-bolder'>{officer_email}</span>
              </li>
            </ul>
          </div>
        </div>

        <img
          className='card-img-bottom '
          style={{ height: '180px' }}
          src={
            !avatar_file_url.includes('missing')
              ? `https://www.transparencia.gob.sv/${avatar_file_url}`
              : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
          }
          alt={avatar_file_name}
        />
      </div>
    </div>
  );
};
