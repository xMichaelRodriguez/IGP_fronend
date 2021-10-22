import React from 'react'
import { FaPlusCircle, FaUserCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setActiveForum } from '../../actions/forumsAction'
import { uiOpenModal } from '../../actions/uiActions'
export const ForumUser = ({ user }) => {
  const dispatch = useDispatch()
  const handlerCreateForum = () => {
    dispatch(setActiveForum())
    dispatch(uiOpenModal())
  }
  return (
    <div>
      <blockquote className='blockquote card'>
        <p className='mb-0 p-3'>
          <FaUserCircle /> {user.name}
        </p>

        <button
          className='btn primary btn-sm'
          onClick={handlerCreateForum}
        >
          <small>Crear Foro </small>
          <FaPlusCircle />
        </button>
      </blockquote>
    </div>
  )
}
