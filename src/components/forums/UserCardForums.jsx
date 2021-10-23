import moment from 'moment'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { startDeleteForum } from '../../actions/forumsAction'

export const UserCardForums = ({ myForums }) => {
  const dispatch = useDispatch()
  const handleDeleteForum = (id) => {
    dispatch(startDeleteForum(id))
  }
  return (
    <div className='card p-1 mb-2 shadow-sm'>
      <blockquote className='blockquote mb-0 card-body text-break'>
        <p className='h5 '>{myForums.theme}</p>
        <small>{moment(myForums.created).calendar()}</small>
        <footer className='blockquote-footer mb-3'>
          <small className='text-muted'>
            <cite title='Source Title'>
              {myForums.content.substr(0, 200) + '...'}
            </cite>
          </small>
        </footer>
        <button
          className='btn btn-outline-danger '
          type='button'
          onClick={() => handleDeleteForum(myForums._id)}
        >
          <FaTrash />
        </button>
      </blockquote>
    </div>
  )
}
