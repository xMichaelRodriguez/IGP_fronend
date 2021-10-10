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
const speaker = new SpeechSynthesisUtterance()
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
    ;(async function () {
      const data = await fetchSync(path + '/' + Id)
      const body = await data.json()

      if (body.ok) {
        delete body.ok
        setDataToRead(body[path])
      }
    })()
  }, [Id, path])

  const handleSpeak = (d) => {
    speaker.voice = speechSynthesis.getVoices()[11]
    speaker.text = d.title
    speaker.pitch = 1
    speaker.volume = 0.5
    speaker.rate = 1.1
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
  return Object.entries(dataToRead).length === 0 ? (
    <div className='d-flex justify-content-center'>
      <WaitScreen />
    </div>
  ) : (
    <div className='container-fluid py-5 animate__animated   animate__fadeIn '>
      <div className='container  card-body'>
        <buton
          className='btn btn-link'
          onClick={() => {
            synth.cancel()
            history.goBack()
          }}
        >
          Volver
        </buton>
        <h1 className='card-title display-5'>
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

        <div className='row mb-3 '>
          <div className='p-3 border border-secondary rounded'>
            <p>Controles de reproducción</p>
            <button
              className='btn primary mx-1'
              onClick={() => handleSpeak(dataToRead)}
              title='Narrar'
            >
              <FaPlay />
            </button>

            <button
              className='btn btn-outline-secondary mx-1'
              onClick={handleResume}
              title='Reanudar'
            >
              <BiReset />
            </button>

            <button
              className='btn btn-outline-secondary mx-1'
              onClick={handlePause}
              title='pausar'
            >
              <FaPauseCircle />
            </button>
            <button
              className='btn btn-outline-danger mx-1'
              onClick={handleCancel}
              title='Cancelar'
            >
              <FaTimesCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
