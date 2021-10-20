import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { commicStartDelted } from '../../actions/commicsActions'

export const CommicCard = ({ title, coverPage, id }) => {
  const history = useHistory()
  const location = useLocation()
  const param = location.pathname.split('/')
  const handleRedirect = () => {
    history.push(`/biblioteca/commics/${id}`)
  }
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(commicStartDelted(id))
  }

  return (
    <div
      className='card mb-3 bg-dark text-white hoverCommic'
      style={{ cursor: 'pointer' }}
    >
      <img
        src={coverPage.imageUrl}
        className='card-img bg-card'
        alt={coverPage.imageUrl}
        style={{ maxHeight: '20rem' }}
      />
      <div className='card-img-overlay'>
        <p
          className='card-text mb-0 font-weight-bold'
          style={{ fontSize: '0.9rem' }}
        >
          {title}
        </p>
        {param[1].includes('profile') ? (
          <button
            type='button'
            className='btn primary'
            onClick={() => handleDelete(id)}
          >
            <FaTrash /> Eliminar
          </button>
        ) : (
          <button
            type='button'
            className='btn primary '
            onClick={handleRedirect}
          >
            Leer
          </button>
        )}
      </div>
    </div>
  )
}
