import React from 'react'
import { useHistory } from 'react-router'

export const CardForum = () => {
  const history = useHistory()
  return (
    <div className='card p-1 mb-2 shadow-sm'>
      <blockquote className='blockquote mb-0 card-body'>
        <p className='font-weight-bold '>Source Title</p>
        <footer className='blockquote-footer mb-3'>
          <small className='text-muted'>
            <cite title='Source Title'>Source Title</cite>
          </small>
        </footer>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={() => {
            history.push('/foros/21214')
          }}
        >
          Ver Foro
        </button>
      </blockquote>
    </div>
  )
}
