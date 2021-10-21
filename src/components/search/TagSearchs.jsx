import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-use'

import queryString from 'query-string'
import { CommicsScreen } from '../commics/CommicsScreen'
import { CuentosView } from '../library/CuentosView'
import building from '../../img/building_websites.svg'
export const TagSearchs = ({ history }) => {
  const { category } = useSelector((state) => state)

  const handleTagSearch = (query) => {
    history.push(`?q=${query}`)
  }
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  return (
    <>
      {category.map((c) => (
        <div className='col-md-6' key={c.id}>
          <div
            className='card mb-3 shadow '
            onClick={() => handleTagSearch(c.title)}
            style={{
              background: c.background,
              color: c.color,
            }}
          >
            <div className='row no-gutters hoverTag'>
              <div className='col-md-4'>
                <img
                  className='card-img'
                  src={c.image}
                  alt={c.image}
                  style={{
                    maxHeight: '100px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className='card-title font-weight-bold'>
                    {c.title}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {q.toLowerCase() === 'commics' ? (
        <CommicsScreen />
      ) : (
        ''
      )}
      {q.toLowerCase() === 'derechos' ? (
        <div className=' d-flex justify-content-center align-items-center'>
          <h5>En Proceso...</h5>
          <img
            className='card-img h-50 w-50'
            src={building}
            alt='building web site'
          />
        </div>
      ) : (
        ''
      )}

      {q.toLowerCase() === 'cuentos' ? <CuentosView /> : ''}
    </>
  )
}
