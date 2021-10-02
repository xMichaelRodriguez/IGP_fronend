import React from 'react'

export const Website = ({ websideURL }) => {
  return (

    <li className='list-group-item bg-light'>
      <small>Sitio web:</small>{' '}
      <a
        href={websideURL}
        target='_blank'
        rel='noopener noreferrer'
        className=' btn-link'
      >
        <small style={{ fontSize: '1rem' }}>
          {websideURL}
        </small>
      </a>
    </li>

  )
}
