import 'moment/locale/es'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'

import { CardScreen } from '../cards/CardScreen'
import { Pagination } from '../cards/Pagination'

import { DatePickerScreen } from './DatePickerScreen.js'

export const NoticeScreen = () => {
  const { noticies } = useSelector(
    (state) => state.notice
  )
  const location = useLocation()
  const history = useHistory()
  const param = location.pathname.split('/')[1]

  return (
    <>
      {noticies === [] && !noticies && (
        <h3 className='display-4'>No Hay Noticias</h3>
      )}
      <section className='container mt-3'>
        <div className='container row '>
          <div className='col-md-12 '>
            <DatePickerScreen rute='notice' />
          </div>
          {param === 'profile' ? (
            <>
              <div className='col-md-6'>
                <Pagination
                  selector={'notice'}
                  subSelector='noticies'
                />
              </div>

              <div className='col-md-6'>
                <button
                  className='btn primary btn-block mb-3'
                  type='button'
                  onClick={() => {
                    history.push(
                      '/profile/mantenimiento/noticias'
                    )
                  }}
                >
                  Nueva Noticia
                </button>
              </div>
            </>
          ) : (
            <div className='col-md-12  animate__animated animate__fadeIn'>
              <Pagination
                selector={'notice'}

              />
            </div>
          )}
        </div>
        <div className='row animate__animated animate__fadeIn'>
          <CardScreen
            data={noticies !== [] && noticies}
            route='noticias'
            mode={param}
            history={history}
          />
        </div>
      </section>
    </>
  )
}
