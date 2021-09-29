import React from 'react'
import {
  BsEnvelopeFill,
  BsInfoCircleFill,
} from 'react-icons/bs'
import {
  FaFacebook,
  FaFileAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { useOrganizations } from '../../hooks/useOrganizations'
import { WaitScreen } from '../wait/WaitScreen'
export const OrganizationCard = () => {
  const history = useHistory()
  const { organization_acronym } = useParams()
  const { data: organizations, loading } =
    useOrganizations()
  const newOrganization =
    organizations &&
    organizations.find(
      (or) => or.acronym === organization_acronym
    )

  const TwitterList = () => {
    if (newOrganization.twitter_url.includes(',')) {
      return newOrganization.twitter_url
        .split(',')
        .map((twitter, index) => (
          <li
            className='text-muted'
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(twitter)
            }}
          >
            <strong>
              <FaTwitter color='#00acee ' /> {twitter}
            </strong>
          </li>
        ))
    } else {
      return (
        <li className='text-muted'>
          <p
            className=''
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
              <p className='text-info'>Sin Twitter</p>
            )}
          </p>
        </li>
      )
    }
  }
  const FacebookList = () => {
    if (newOrganization.facebook_url.includes(',')) {
      return newOrganization.facebook_url
        .split(',')
        .map((facebook, index) => (
          <li
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(facebook)
            }}
          >
            <strong>
              <FaFacebook color='blue' /> {facebook}
            </strong>
          </li>
        ))
    } else {
      return (
        <li className='text-muted'>
          <p
            style={{ cursor: 'pointer', fontSize: '15px' }}
            className='text-muted'
            onClick={() =>
              newOrganization.facebook_url !== '' &&
              window.open(newOrganization.facebook_url)
            }
          >
            {newOrganization.facebook_username !== '' ? (
              <p>
                <FaFacebook color='blue' />{' '}
                {newOrganization.facebook_username}
              </p>
            ) : (
              <p className='text-primary'>Sin Facebook</p>
            )}
          </p>
        </li>
      )
    }
  }

  const YoutueList = () => {
    if (newOrganization.youtube_url.includes(',')) {
      return newOrganization.youtube_url
        .split(',')
        .map((youtube, index) => (
          <li
            className='text-muted'
            style={{ cursor: 'pointer' }}
            key={index}
            onClick={() => {
              window.open(youtube)
            }}
          >
            <strong>
              <FaYoutube className='text-danger' />{' '}
              {youtube}
            </strong>
          </li>
        ))
    } else {
      return (
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
              <p className='text-danger'>Sin Youtube</p>
            )}
          </p>
        </li>
      )
    }
  }
  return (
    <>
      {loading ? (
        <WaitScreen />
      ) : (
        <div className='container shadow mt-3 mb-5 card text-break card  animate__animated   animate__fadeIn'>
          <div className='card-body'>
            <h3 className='card-title'>
              {newOrganization.name}
            </h3>
            <span className='card-subtitle text-muted'>
              {newOrganization.acronym}
            </span>

            <div className='card-text'>
              <div className='py-1'>
                <BsInfoCircleFill className='text-info' />{' '}
                Oficial de información:{' '}
                {newOrganization.officer_name}
              </div>
              <div className='py-1'>
                <BsEnvelopeFill className='text-info' />{' '}
                {newOrganization.officer_email}
              </div>
              <div className='py-1'>
                {newOrganization.website_url && (
                  <a
                    className='text-muted '
                    href={newOrganization.website_url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaFileAlt className='text-info' />{' '}
                    {newOrganization.website_url}
                  </a>
                )}
              </div>
            </div>

            <div className='line'></div>
            <div className='container'>
              <div className='row container'>
                <div className='col-md-12'>
                  <h3>Puedes Encontrarlo En:</h3>
                </div>
                <div className='col-md-6 mb-3'>
                  <ul className='list-group font-weight-bold'>
                    Twitter: <TwitterList />
                  </ul>
                </div>

                <div className='col-md-6 mb-3'>
                  <ul className='list-group font-weight-bold'>
                    Facebook: <FacebookList />
                  </ul>
                </div>

                <div className='col-md-6 mb-3'>
                  <ul className='list-group font-weight-bold'>
                    Youtube: <YoutueList />
                  </ul>
                </div>

                <div className='col-md-6 mb-3 font-weight-bold'>
                  Documento Administrativo:
                  <p
                    className='uk-link-muted'
                    style={{
                      cursor: 'pointer',
                      fontSize: '15px',
                    }}
                    onClick={() => {
                      window.open(
                        `https://www.transparencia.gob.sv${newOrganization.administrative_document_file_url}`
                      )
                    }}
                  >
                    <BsInfoCircleFill className='text-info' />{' '}
                    <span>
                      URL del archivo del documento
                      administrativo
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <button
              className='btn primary'
              onClick={() => history.goBack()}
            >
              Volver
            </button>
          </div>
          <img
            src={
              !newOrganization.avatar_file_url.includes(
                'missing'
              )
                ? `https://www.transparencia.gob.sv/${newOrganization.avatar_file_url}`
                : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
            }
            alt={newOrganization.avatar_file_name}
            className='card-img-bottom'
            style={{ height: '28rem' }}
          />
        </div>
      )}
    </>
  )
}
