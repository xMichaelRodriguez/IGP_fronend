import React from 'react';
import { Fragment } from 'react';

import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { useOrganizations } from '../hooks/useOrganizations';

export const OrganizationsView = () => {
  const { data: organization, loading } = useOrganizations();

  return (
    <>
      {loading && (
        <h3 className='d-flex justify-content-center'>
        Cargando
        </h3>
      )}

      <ul className='list-group mb-auto'>
        {organization.map((org) => (
          <>
            {(org.acronym.includes('CONNA') ||
              org.acronym.includes('ISNA')) && (
              <li key={org.id} className='card'>
                <div className='card-body'>
                  <div className='font-weigth-bold'>
                    {!org.avatar_file_url.includes('missing') ? (
                      <img
                        className='img-thumbnail'
                        src={`https://www.transparencia.gob.sv/${org.avatar_file_url}`}
                        alt={`${org.avatar_file_name}`}
                      />
                    ) : (
                      <img
                        className='img-thumbnail'
                        alt='not found'
                        src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                      />
                    )}
                  </div>
                  <div className='line'></div>
                  <ul className='list-group'>
                    <li className='list-group-item'>
                      <p
                        className='card-title text-dark'
                        style={{ fontSize: '1rem' }}
                      >
                        Encargado/a:
                        <small className='font-wight-bold'>
                          {' '}
                          {org.officer_name}
                        </small>
                      </p>
                    </li>

                    {org.website_url && (
                      <li className='list-group-item bg-light'>
                        <a
                          href={org.website_url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className=' btn-link'
                        >
                          <small style={{ fontSize: '1rem' }}>
                            {' '}
                            {org.website_url}
                          </small>
                        </a>
                      </li>
                    )}
                    <li className=' list-group-item mb-2 text-center'>
                      <div className='row '>
                        {org.twitter_url && !org.twitter_url.includes(',') ? (
                          <div className='col-md-3'>
                            <a
                              href={org.twitter_url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='btn-link'
                            >
                              <FaTwitterSquare size='1.5rem' color='#00acee' />
                            </a>
                          </div>
                        ) : (
                          <div className='col-md-12'>
                            <small
                              className='text-primary'
                              style={{ fontSize: '1rem' }}
                            >
                              Sin Twitter
                            </small>
                          </div>
                        )}

                        {org.facebook_url && !org.facebook_url.includes(',') ? (
                          <div className='col-md-3'>
                            <a
                              href={org.facebook_url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='btn-link'
                            >
                              <FaFacebookSquare size='1.5rem' color='blue' />
                            </a>
                          </div>
                        ) : (
                          <div className='col-md-12'>
                            <small
                              className='text-primary'
                              style={{ fontSize: '0.9rem' }}
                            >
                              Sin Facebook
                            </small>
                          </div>
                        )}

                        {org.youtube_url && !org.youtube_url.includes(',') ? (
                          <div className='col-md-3'>
                            <a
                              href={org.youtube_url}
                              className='text-danger'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='btn-link'
                            >
                              <FaYoutube size='1.5rem' color='red' />
                            </a>
                          </div>
                        ) : (
                          <div className='col-md-12'>
                            <small
                              className='text-danger'
                              style={{ fontSize: '0.9rem' }}
                            >
                              Sin Youtube
                            </small>
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                  <small className='card-link' style={{ fontSize: '1rem' }}>
                    {org.officer_email}
                  </small>
                </div>
              </li>
            )}
          </>
        ))}
      </ul>
    </>
  );
};
