import React from 'react'
import { useHistory, useParams } from 'react-router'

import {
  FaArrowLeft,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import { BiMailSend } from 'react-icons/bi'
import { WaitScreen } from '../wait/WaitScreen'
import { useOrganizations } from '../../hooks/useOrganizations'

export const OrganizationCard = () => {
  const history = useHistory()
  const { organization_acronym } = useParams()

  const { data: organization, loading } = useOrganizations(
    organization_acronym
  )

  return (
    <div className='container-fluid py-4'>
      <div className='container '>
        {loading ? (
          <WaitScreen />
        ) : (
          <div className='card p-4 shadow'>
            <div className='row no-gutters'>
              <div className='mb-2 col-md-4'>
                <img
                  src={organization.image_url}
                  className='card-img'
                  alt={organization.image_url}
                />
              </div>
              <div className='mb-2 col-md-8 px-3 '>
                <h3 className='card-title font-weight-bold'>
                  {organization.acronym}
                </h3>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {organization.name}
                </h6>
                <div className='row mt-2'>
                  <div className='mb-2 col-md-6 text-muted'>
                    <p className='card-text font-weight-bold text-dark'>
                      Dirección
                    </p>
                    {organization.direccion}
                  </div>
                  <div className='mb-2 col-md-6'>
                    <p className='card-text font-weight-bold mb-1'>
                      Telefono(s)
                    </p>
                    <ul className='list-group list-group-flush'>
                      {organization.telefonos.map(
                        (telefono, index) => (
                          <li
                            className='list-group-item text-muted'
                            key={index}
                          >
                            {telefono}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className='mb-2 col-md-12'>
                    <p className='card-text font-weight-bold mb-1'>
                      Horarios
                    </p>
                    <ul className='list-group list-group-flush'>
                      {organization.horarios.map(
                        (horario, index) => (
                          <li
                            className='list-group-item text-muted'
                            key={index}
                          >
                            {horario + '\n'}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-2'>
                <div className='card-text'>
                  <p>Official de Información</p>
                  <h4>{organization.officer_name}</h4>
                  <p className='card-text text-muted'>
                    <BiMailSend size='1.3rem' />{' '}
                    {organization.officer_email}
                  </p>

                  <a
                    rel='noreferrer'
                    href={organization.website_url}
                    target='_blank'
                    className='btn-link'
                  >
                    {organization.website_url}
                  </a>
                </div>
              </div>
              <div className='col-md-8 mb-2'>
                <div className='row'>
                  <div className='col-md-4'>
                    <p className='text-primary'>Facebook</p>
                    <ul className='list-group list-group-flush'>
                      {organization.redes.facebook_url.map(
                        (socialNetwork) => (
                          <li className='list-group-item' key={socialNetwork}>
                            <a
                              rel='noreferrer'

                              className='btn-link'
                              href={socialNetwork}
                              target='_blank'
                            >
                              <small>
                                <FaFacebook color='blue' />{' '}
                                {socialNetwork}
                              </small>
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className='col-md-4'>
                    <p className='text-primary'>Twitter</p>
                    <ul className='list-group list-group-flush'>
                      {organization.redes.twitter_url.map(
                        (socialNetwork) => (
                          <li className='list-group-item' key={socialNetwork}>
                            <a
                              rel='noreferrer'

                              className='btn-link'
                              href={socialNetwork}
                              target='_blank'
                            >
                              <small>
                                <FaTwitter />{' '}
                                {socialNetwork}
                              </small>
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className='col-md-4'>
                    <p className='text-danger'>Youtube</p>
                    <ul className='list-group list-group-flush'>
                      {organization.redes.youtube_url.map(
                        (socialNetwork) => (
                          <li className='list-group-item' key={socialNetwork}>
                            <a
                              rel='noreferrer'

                              className='btn-link'
                              href={socialNetwork}
                              target='_blank'
                            >
                              <small>
                                <FaYoutube color='red' />{' '}
                                {socialNetwork}
                              </small>
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <button
                  className='btn btn-link'
                  onClick={() => history.goBack()}
                >
                  <FaArrowLeft /> Volver
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
