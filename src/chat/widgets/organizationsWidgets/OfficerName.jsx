import React from 'react'

export const OfficerName = ({officerName}) => {
    return (
        <li className='list-group-item'>
        <p
          className='card-title text-dark'
          style={{ fontSize: '1rem' }}
        >
          Encargado/a:
          <small className='font-wight-bold'>
            {' '}
            {officerName}
          </small>
        </p>
      </li>
    )
}
