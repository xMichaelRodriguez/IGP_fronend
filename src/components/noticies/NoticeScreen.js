import 'moment/locale/es'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'

import { CardScreen } from '../cards/CardScreen'
import { Pagination } from '../cards/Pagination'
import { WaitScreen } from '../wait/WaitScreen'
import { DatePickerScreen } from './DatePickerScreen.js'

export const NoticeScreen = () => {
  const { noticeArr } = useSelector(
    (state) => state.notice.noticies
  )
  const location = useLocation()
  const history = useHistory()
  const param = location.pathname.split('/')[1]

  return (
    <>
      {noticeArr === [] && !noticeArr && <WaitScreen />}
      <section className='container mt-3'>
        <div className='container row '>
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
                subSelector='noticies'
              />
            </div>
          )}
          <div className='col-md-12 '>
            <DatePickerScreen rute='notice' />
          </div>
        </div>
        <div className='row animate__animated animate__fadeIn'>
          <CardScreen
            data={noticeArr !== [] && noticeArr}
            route='noticias'
            mode={param}
            history={history}
          />
        </div>
      </section>
    </>
  )
}
