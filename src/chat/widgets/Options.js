import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

export const Options = ({ actionProvider }) => {
  return actionProvider.map((option) => (
    <blockquote
      key={option.id}
      className='p-3 primary  cursor text-brea rounded'
      onClick={option.handler}
    >
      <p
        className='m-auto text-break text-light rounded'
        style={{ fontSize: '1rem' }}
      >
        <FaChevronRight /> {option.text}
      </p>
    </blockquote>
  ))
}
