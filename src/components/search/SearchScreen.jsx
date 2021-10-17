import React from 'react'

import './styleSearch.css'
import { FaSearch } from 'react-icons/fa'

export const SearchScreen = () => {
  const categories = [
    {
      id: 1,
      title: 'Commics',
      image:
        'https://i.pinimg.com/originals/c7/c7/41/c7c7412fe770f16685f1c1f7a39ee357.jpg',
      background: '#9c9c9c',
      color: '#282828',
    },
    {
      id: 2,
      title: 'Cuentos',
      image:
        'https://visme.co/blog/wp-content/uploads/2016/01/16.jpg',
      background: '#b5936f',
      color: '#fbfbfb',
    },
    {
      id: 3,
      title: 'Derechos',
      image:
        'https://img.pngio.com/earth-surrounded-by-children-illustration-universal-declaration-declaration-of-the-rights-of-the-child-png-587_596.jpg',
      background: '#248A34',
      color: '#fbfbfb',
    },
    {
      id: 4,
      title: 'Deberes',
      image:
        'https://c8.alamy.com/comp/BR7TPE/an-graphic-representation-of-a-dad-helping-his-son-with-homework-BR7TPE.jpg',
      background: '#3383FF',
      color: '#fbfbfb',
    },
  ]
  return (
    <div className='container-fluid py-5'>
      <div className='container'>
        <div className='row height d-flex justify-content-center align-items-center mb-5'>
          <div className='form w-100'>
            <FaSearch />
            <input
              type='text'
              className='form-control form-input shadow-sm'
              placeholder='buscar Cualquier Cosa'
            />
            <span className='left-pan'>
              <i className='fa fa-microphone'></i>
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 mb-3'>
            <h5 className=''>Etiquetas</h5>
          </div>
          {categories.map((category) => (
            <div className='col-md-6'>
              <div
                className='card mb-3 shadow '
                style={{
                  background: category.background,
                  color: category.color,
                }}
                key={category.id}
              >
                <div className='row no-gutters hoverTag'>
                  <div className='col-md-4'>
                    <img
                      className='card-img'
                      src={category.image}
                      alt={category.image}
                      style={{
                        maxHeight: '100px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title font-weight-bold'>
                        {category.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
