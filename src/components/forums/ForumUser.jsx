import React from 'react'
import { FaPlusCircle, FaUserCircle } from 'react-icons/fa'
export const ForumUser = ({ user }) => {
  return (
    <div>
      <blockquote className='blockquote card'>
        <p className='mb-0 p-3'>
          <FaUserCircle /> {user.name}
        </p>
        <button className='btn primary btn-sm'>
          <small>Crear Foro </small>
          <FaPlusCircle />
        </button>
      </blockquote>
    </div>
  )
}
