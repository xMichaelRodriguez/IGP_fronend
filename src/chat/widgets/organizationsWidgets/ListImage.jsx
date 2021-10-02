import React from 'react'

export const ListImage = ({ avatar }) => {
  return (
    <div className='font-weigth-bold'>
      {!avatar.includes('missing') ? (
        <img
          className='img-thumbnail'
          src={`https://www.transparencia.gob.sv/${avatar}`}
          alt={`url ${avatar}`}
        />
      ) : (
        <img
          className='img-thumbnail'
          alt='not found data'
          src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
        />
      )}
    </div>
  )
}
