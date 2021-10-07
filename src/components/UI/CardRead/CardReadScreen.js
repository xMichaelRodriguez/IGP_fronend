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
import { BiReset } from 'react-icons/bi'
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
    console.log('hola')
    speaker.voice = speechSynthesis.getVoices()[11]
    speaker.text = d.title
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
      <div className='container shadow card-body'>
        <buton
          className='btn btn-link'
          onClick={() => {
            history.goBack()
          }}
        >
          Volver
        </buton>
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

        <div className='row mbb-3'>
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
  )
}
