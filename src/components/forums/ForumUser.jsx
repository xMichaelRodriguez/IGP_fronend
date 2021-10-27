import React, { useEffect } from 'react'
import { FaPlusCircle, FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingMyForums } from '../../actions/forumsAction'
import { uiOpenModal } from '../../actions/uiActions'
import { UserCardForums } from './UserCardForums'
export const ForumUser = ({ user }) => {
  const { myForums } = useSelector(
    (state) => state.userForum
  )
  const dispatch = useDispatch()
  const handlerCreateForum = () => {
    // dispatch(setActiveForum())
    dispatch(uiOpenModal())
  }

  useEffect(() => {
    dispatch(startLoadingMyForums())
  }, [dispatch])
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
      <div className='container'>
        <h4>Tus Foros</h4>
        <hr />
        <div className='row containerMyForums'>
          {Object.entries(myForums).length !== 0 ? (
            myForums.map((forum) => (
              <div className='col-md-12' key={forum._id}>
                <UserCardForums myForums={forum} />
              </div>
            ))
          ) : (
            <h4>No tienes foros</h4>
          )}
        </div>
      </div>
    </div>
  )
}
