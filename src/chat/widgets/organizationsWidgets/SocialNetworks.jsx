import React from 'react'

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa'
export const SocialNetworks = ({ twitterURL, facebookURL, youtubeURL }) => {
  return (
    <li className=' list-group-item mb-2 text-center'>
      <small>Redes</small>
      <div className='row '>
        {twitterURL || !twitterURL.includes("y") || !twitterURL.includes(",") ? (
          <div className='col-md-3'>
            <a
              href={twitterURL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-link'
            >
              <FaTwitterSquare
                size='1.5rem'
                color='#00acee'
              />
            </a>
          </div>
        ) : (<div className='col-md-12'>
          <small
            className='text-primary'
            style={{ fontSize: '1rem' }}
          >
            Sin Twitter
          </small>
        </div>)}


        {facebookURL || !facebookURL.includes("y") || !facebookURL.includes(",") ? (
          <div className='col-md-3'>
            <a
              href={facebookURL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-link'
            >
              <FaFacebookSquare
                size='1.5rem'
                color='blue'
              />
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

        {youtubeURL || !youtubeURL.includes("y") || !youtubeURL.includes(",") ? (
          <div className='col-md-3'>
            <a
              href={youtubeURL}
              className='text-danger btn-link'
              target='_blank'
              rel='noopener noreferrer'

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
  )
}
