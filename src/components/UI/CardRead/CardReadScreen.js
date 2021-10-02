import moment from 'moment'
import 'moment/locale/es'

import React, { useEffect, useState } from 'react'
import {
  useHistory,
  useLocation,
  useParams,
} from 'react-router'
import { fetchSync } from '../../../helpers/fetching'
import { WaitScreen } from '../../wait/WaitScreen'

export const CardReadScreen = () => {
  const { Id } = useParams()
  const location = useLocation().pathname.split('/')
  const history = useHistory()
  let path = location[1].includes('noticias')
    ? 'noticies'
    : 'stories'

  const [dataToRead, setDataToRead] = useState({})
  useEffect(() => {
    ;(async function () {
      const data = await fetchSync(path + '/' + Id)
      const body = await data.json()

      if (body.ok) {
        delete body.ok
        setDataToRead(body[path])
      }
    })()
  }, [Id, path])
  return Object.entries(dataToRead).length === 0 ? (
    <div className='d-flex justify-content-center'>
      <WaitScreen />
    </div>
  ) : (
    <div className='container-fluid py-5 animate__animated   animate__fadeIn '>
      <div className='container shadow card-body'>
        <h1 className='card-title display-5'>
          {dataToRead.title}
        </h1>
        <h6 className='card-subtitle mb-2 text-muted'>
          {moment(dataToRead.date).calendar()}
        </h6>

        <p
          className='text-justify card-text text-dark'
          style={{ fontSize: '20px' }}
        >
          {dataToRead.body}
        </p>

        <button
          className='btn btn-link '
          onClick={() => history.goBack()}
        >
          Volver
        </button>
      </div>
    </div>
  )
}
