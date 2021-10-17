import React from 'react'
import { Link } from 'react-router-dom'
import { CommicCard } from '../../commics/CommicCard'

export const SearchCard = ({
  title,
  body,
  imageUrl,
  pulicImg_id,
  id,
  coverPage,
}) => {
  return (
    <div>
      {imageUrl ? (
        <div className='card mb-3 shadow'>
          <img
            src={imageUrl}
            className='card-img-top'
            style={{ maxHeight: '12em' }}
            alt={pulicImg_id}
          />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>

            <p className='card-text text-justify'>
              {body.substr(0, 100)}...
            </p>

            <Link
              to={`/historias/${id}`}
              className='btn btn-link'
            >
              Leer Más
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}

      {coverPage ? (
        <CommicCard
          title={title}
          coverPage={coverPage}
          id={id}
        />
      ) : (
        <div className='card mb-3 shadow'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>

            <p className='card-text text-justify'>
              {body.substr(0, 100)}...
            </p>

            <Link
              to={`/noticias/${id}`}
              className='btn btn-link'
            >
              Leer Más
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
