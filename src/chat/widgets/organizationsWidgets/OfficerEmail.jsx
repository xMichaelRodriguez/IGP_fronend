import React from 'react'

export const OfficerEmail = ({ officerEmail }) => {
    return (
        <small
            className='card-link'
            style={{ fontSize: '1rem' }}
        >
            {officerEmail}
        </small>
    )
}
