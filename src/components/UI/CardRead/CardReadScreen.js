import React, { useEffect, useState } from 'react'
import {
  useHistory,
  useLocation,
  useParams,
} from 'react-router'

import 'moment/locale/es'
import moment from 'moment'
import { fetchSync } from '../../../helpers/fetching'
import { WaitScreen } from '../../wait/WaitScreen'
import {
  FaPauseCircle,
  FaPlay,
  FaTimesCircle,
} from 'react-icons/fa'
import { BiReset, BiTime } from 'react-icons/bi'
import Swal from 'sweetalert2'
const speaker = new SpeechSynthesisUtterance()
speaker.lang = 'es-ES'
const synth = window.speechSynthesis

export const CardReadScreen = () => {
  const { Id } = useParams()
  const location = useLocation().pathname.split('/')
  const history = useHistory()
  let path = location[1].includes('noticias')
    ? 'noticies'
    : 'stories'
  const [dataToRead, setDataToRead] = useState({})

  useEffect(() => {
    ; (async function () {
      const data = await fetchSync(path + '/' + Id)
      const body = await data.json()

      if (body.ok) {
        delete body.ok
        setDataToRead(body[path])
      } else {
        Swal.fire({ title: "Upss's", text: body.msg, icon: "error" }).then(result => {
          if (result.isConfirmed) {
            history.goBack()
          }
        })
      }
    })()
  }, [Id, path, history])

  const handleSpeak = (d) => {
    speaker.voice = speechSynthesis.getVoices()[12]
    speaker.text = d.title
    speaker.pitch = 1
    speaker.rate = 1.0

    speechSynthesis.speak(speaker)
    speaker.text = d.body
    speechSynthesis.speak(speaker)
  }
  const handlePause = () => {
    synth.pause()
  }
  const handleResume = () => {
    synth.resume()
  }
  const handleCancel = () => {
    synth.cancel()
  }
  return dataToRead === null ? (
    <div className='d-flex justify-content-center'>
      <WaitScreen />
    </div>
  ) : (
    <div className='container-fluid py-5 animate__animated   animate__fadeIn '>
      <div className='container  card-body'>

        <button
          type="button"
          className='btn btn-link mb-3'
          onClick={() => {
            synth.cancel()
            history.goBack()
          }}
        >
          Volver
        </button>
        <div className='row mb-3 '>

          <div className='col-md-12 p-3 border-bottom border-secondary rounded m-5 shadow-sm'>
            <p>Controles de reproducción</p>
            <div className="row">
              <div className="col-md-3">
                <button
                  type="button"
                  className='btn primary mx-1 rounded  mb-3'
                  onClick={() => handleSpeak(dataToRead)}
                  title='Narrar'
                >
                  Reproducir  {''}
                  <FaPlay />
                </button>
              </div>
              <div className="col-md-3">
                <button
                  type="button"
                  className='btn btn-outline-secondary mx-1  mb-3'
                  onClick={handleResume}
                  title='Reanudar'
                >
                  Reanudar {' '}
                  <BiReset />
                </button>
              </div>
              <div className='col-md-3'>
                <button
                  type="button"
                  className='btn btn-outline-secondary mx-1  mb-3'
                  onClick={handlePause}
                  title='pausar'
                >
                  Pausar {' '}
                  <FaPauseCircle />
                </button>
              </div>
              <div className="col-md-3">
                <button
                  className='btn btn-outline-danger mx-1 mb-3'
                  onClick={handleCancel}
                  title='Cancelar'
                >
                  cancelar {' '}
                  <FaTimesCircle />
                </button>
              </div>
            </div>






          </div>
        </div>
        <h1 className='card-title display-5 mb-3'>
          {dataToRead.title}
        </h1>
        <h6 className='card-subtitle mb-2 text-muted'>
          <BiTime /> {moment(dataToRead.date).calendar()}
        </h6>

        {path !== 'noticias' && (
          <div className='card-text text-center py-3'>
            <img
              className='img-fluid'
              src={dataToRead.imageUrl}
              alt={dataToRead.imageUrl}
            />
          </div>
        )}
        <p
          className='text-justify card-text text-dark'
          style={{ fontSize: '20px' }}
        >
          {dataToRead.body}
        </p>


      </div>
    </div>
  )
}
