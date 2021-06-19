import React from 'react';
import { Fragment } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { useOrganizations } from '../hooks/useOrganizations';

export const OrganizationsView = () => {
  const { data: organization, loading } = useOrganizations();

  return (
    <Fragment>
      {loading && (
        <h1>
          <span uk-spinner='ratio: 4.5'></span>
        </h1>
      )}

      <ul className='uk-list uk-margin-bottom' style={{ listStyle: 'none' }}>
        {organization.map((org) => (
          <Fragment>
            {(org.acronym.includes('CONNA') ||
              org.acronym.includes('ISNA')) && (
              <li
                key={org.id}
                className='uk-card uk-card-default uk-card-body uk-width-1-1@m'
              >
                <blockquote className=' uk-text-justify highlight uk-text-break'>
                  <div className='mb-1'>
                    <div className='uk-text-bold'>
                      {!org.avatar_file_url.includes('missing') ? (
                        <img
                          className='img-fluid w-50 h-50'
                          src={`https://www.transparencia.gob.sv/${org.avatar_file_url}`}
                          alt={`${org.avatar_file_name}`}
                        />
                      ) : (
                        <img
                          className='img-fluid w-50 h-50'
                          alt='not found'
                          src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                        />
                      )}
                    </div>
                    <hr />
                    <ul
                      className='uk-list uk-list-divider'
                      style={{ listStyle: 'none' }}
                    >
                      <li className=''>
                        <span>
                          <BsFillCaretRightFill />
                          <span className='font-weight-bold'>
                            Encargado/a:{' '}
                          </span>
                          {org.officer_name}
                        </span>
                      </li>

                      <li>
                        <BsFillCaretRightFill />
                        <span className='font-weight-bold'> Sitio web: </span>
                        <a
                          href={org.website_url}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {org.website_url}
                        </a>
                      </li>
                      <li className='mb-2 text-center'>
                        <BsFillCaretRightFill />{' '}
                        <span className='font-weight-bold'>Redes</span>
                        <div className='uk-column-1-2'>
                          <div className=''>
                            {org.twitter_url &&
                            !org.twitter_url.includes(',') ? (
                              <Fragment>
                                <a
                                  href={org.twitter_url}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <FaTwitterSquare size='1.5rem' />
                                </a>
                              </Fragment>
                            ) : (
                              <span className='uk-text-primary'>
                                Sin Twitter
                              </span>
                            )}
                          </div>
                          <div className=''>
                            {org.facebook_url &&
                            !org.facebook_url.includes(',') ? (
                              <a
                                href={org.facebook_url}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                <FaFacebookSquare size='1.5rem' />
                              </a>
                            ) : (
                              <span className='uk-text-primary'>
                                Sin Facebook
                              </span>
                            )}
                          </div>
                          <div className=''>
                            {org.youtube_url &&
                            !org.youtube_url.includes(',') ? (
                              <a
                                href={org.youtube_url}
                                className='uk-text-danger'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                <FaYoutube
                                  size='1.5rem'
                                  className='text-danger'
                                />
                              </a>
                            ) : (
                              <span className='uk-text-danger'>
                                Sin Youtube
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <footer className='uk-text-primary'>
                    {org.officer_email}
                  </footer>
                </blockquote>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </Fragment>
  );
};
