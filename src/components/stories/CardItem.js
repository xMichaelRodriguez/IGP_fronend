import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { BiTime } from 'react-icons/bi'
export const CardItem = ({
  route,
  title,
  date,
  body,
  id,
  imageUrl,
}) => {
  return (
    <div
      class='card mx-3 bg-dark text-white'
      style={{ height: '220px' }}
    >
      <img
        src={imageUrl}
        class='card-img bg-card'
        alt={imageUrl}
      />
      <div class='card-img-overlay'>
        <p
          class='card-text mb-0 font-weight-bold'
          style={{ fontSize: '0.9rem' }}
        >
          {title}
        </p>
        <p class='card-text mb-1'>
          <BiTime /> {moment(date).calendar()}
        </p>
        <Link
          to={`/${route}/${id}`}
          className='btn primary btn-link'
        >
          Leer Más
        </Link>
      </div>
    </div>
  )
}
