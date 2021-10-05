import React from 'react'
import { Link } from 'react-router-dom'

export const CardItem = ({
  route,
  title,
  date,
  body,
  id,
}) => {
  return (
    <div className='card mx-3  shadow'>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='display-6 card-title text-dark'>
          {title}
        </h5>
        {/* <p className=' card-text text-justify text-muted'>
          {body.substr(0, 20)}...
        </p> */}
        <Link
          to={`/${route}/${id}`}
          className='btn btn-link'
        >
          Leer Ahora
        </Link>
      </div>
    </div>
  )
}
