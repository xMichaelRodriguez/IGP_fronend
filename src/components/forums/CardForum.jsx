import moment from 'moment'
import React from 'react'
import { useHistory } from 'react-router'

export const CardForum = ({
  theme,
  content,
  created,
  _id,
}) => {
  const history = useHistory()
  return (
    <div className='card p-1 mb-2 shadow-sm'>
      <blockquote className='blockquote mb-0 card-body'>
        <p className='font-weight-bold '>{theme}</p>
        <small>{moment(created).calendar()}</small>
        <footer className='blockquote-footer mb-3'>
          <small className='text-muted'>
            <cite title='Source Title'>{content}</cite>
          </small>
        </footer>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={() => {
            history.push(`/foros/${_id}`)
          }}
        >
          Ver Foro
        </button>
      </blockquote>
    </div>
  )
}
