import React from 'react';
import {
  BsArrowReturnLeft,
  BsEnvelopeFill,
  BsInfoCircleFill,
} from 'react-icons/bs';
import { FaFacebook, FaFileAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useOrganizations } from '../../hooks/useOrganizations';
export const OrganizationCard = () => {
  const history = useHistory();
  const { organization_acronym } = useParams();
  const { data: organizations, loading } = useOrganizations();
  const newOrganization =
    organizations &&
    organizations.find((or) => or.acronym === organization_acronym);

  return (
    <div style={{ margin: '50px', display: 'flex', justifyContent: 'center' }}>
      {loading ? (
        <h1>
          <span>Cargando...</span>
          <span uk-spinner='ratio: 4.5'></span>
        </h1>
      ) : (
        <div className=' uk-card uk-card-default uk-card-body uk-width-1-2@m animate__animated   animate__fadeIn'>
          <div className='uk-padding-small'>
            <div class='uk-card-media-top uk-text-center'>
              <img
                style={{ height: 'auto', width: '450px' }}
                src={
                  !newOrganization.avatar_file_url.includes('missing')
                    ? `https://www.transparencia.gob.sv/${newOrganization.avatar_file_url}`
                    : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                }
                alt={newOrganization.avatar_file_name}
              />
            </div>
            <h3 class='uk-card-title'>{newOrganization.name}</h3>
            <span>{newOrganization.acronym}</span>

            <div className='uk-column-1-2'>
              <div>
                <BsInfoCircleFill className='text-info' /> Oficial de
                información: {newOrganization.officer_name}
              </div>
              <div>
                <BsEnvelopeFill className='text-info' />{' '}
                {newOrganization.officer_email}
              </div>
              <div>
                {newOrganization.website_url && (
                  <div className='text-muted mt-2 mb-3'>
                    <FaFileAlt className='text-info' />
                    {newOrganization.website_url}
                  </div>
                )}
              </div>
            </div>
            <div className='uk-margin'>
              <h4>Contacto</h4>
              <hr className='uk-divider-icon' />
              <div className='uk-column-1-2'>
                <div className='twittr uk-text-break'>
                  <ul class='uk-list'>
                    {newOrganization.twitter_url.includes(',') ? (
                      newOrganization.twitter_url.split(',').map((twitter) => (
                        <li
                          className='uk-link-muted'
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            window.open(twitter);
                          }}
                        >
                          <strong>
                            <FaTwitter /> {twitter}
                          </strong>
                        </li>
                      ))
                    ) : (
                      <li className='uk-link-muted'>
                        <p
                          className='uk-link-muted'
                          style={{ cursor: 'pointer', fontSize: '15px' }}
                          onClick={() =>
                            newOrganization.twitter_url !== '' &&
                            window.open(newOrganization.twitter_url)
                          }
                        >
                          {newOrganization.twitter_username !== '' ? (
                            <p className='uk-link-muted'>
                              <FaTwitter className='text-primary' />{' '}
                              {newOrganization.twitter_username}
                            </p>
                          ) : (
                            <p>Sin Twitter</p>
                          )}
                        </p>
                      </li>
                    )}
                  </ul>
                </div>

                <div className='face uk-text-break'>
                  <ul className='uk-list'>
                    {newOrganization.facebook_url.includes(',') ? (
                      newOrganization.facebook_url
                        .split(',')
                        .map((facebook) => (
                          <li
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              window.open(facebook);
                            }}
                          >
                            <strong>
                              <FaFacebook /> {facebook}
                            </strong>
                          </li>
                        ))
                    ) : (
                      <li className='uk-link-muted'>
                        <p
                          style={{ cursor: 'pointer', fontSize: '15px' }}
                          onClick={() =>
                            newOrganization.facebook_url !== '' &&
                            window.open(newOrganization.facebook_url)
                          }
                        >
                          {newOrganization.facebook_username !== '' ? (
                            <p>
                              <FaFacebook className='text-primary' />{' '}
                              {newOrganization.facebook_username}
                            </p>
                          ) : (
                            <p>Sin Facebook</p>
                          )}
                        </p>
                      </li>
                    )}
                  </ul>
                </div>

                <div className='youtube uk-text-break'>
                  <ul className='uk-list'>
                    {newOrganization.youtube_url.includes(',') ? (
                      newOrganization.youtube_url.split(',').map((youtube) => (
                        <li
                          className='uk-link-muted'
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            window.open(youtube);
                          }}
                        >
                          <strong>
                            <FaYoutube className='text-danger' /> {youtube}
                          </strong>
                        </li>
                      ))
                    ) : (
                      <li className='uk-link-muted'>
                        <p
                          style={{ cursor: 'pointer', fontSize: '15px' }}
                          onClick={() =>
                            newOrganization.youtube_url !== '' &&
                            window.open(newOrganization.youtube_url)
                          }
                        >
                          {newOrganization.youtube_username !== '' ? (
                            <p>
                              <FaYoutube className='text-danger' />{' '}
                              {newOrganization.youtube_username}
                            </p>
                          ) : (
                            <p>Sin Youtube</p>
                          )}
                        </p>
                      </li>
                    )}
                  </ul>
                </div>

                <p
                  className='uk-link-muted'
                  style={{ cursor: 'pointer', fontSize: '15px' }}
                  onClick={() => {
                    window.open(
                      `https://www.transparencia.gob.sv${newOrganization.administrative_document_file_url}`
                    );
                  }}
                >
                  <BsInfoCircleFill className='text-info' />{' '}
                  <span>URL del archivo del documento administrativo</span>
                </p>
              </div>
            </div>
            <button
              class='uk-button uk-button-default primary'
              onClick={() => history.goBack()}
            >
              <BsArrowReturnLeft size='1.5rem' /> Volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
