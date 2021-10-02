import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import {
  setError,
  uiRemoveError,
} from '../../actions/authActios'
import {
  startstoryAddNew,
  storyClearActive,
  storyStartUpdated,
} from '../../actions/events'
import validator from 'validator'
import {
  noticeClearActive,
  noticetStartUpdated,
  startnoticeAddNew,
} from '../../actions/noticesActions'

const initialForm = {
  title: '',
  body: '',
}
export const ManageScreen = () => {
  const dispatch = useDispatch()
  const { token } = useParams()
  const history = useHistory()
  const { msgError } = useSelector((state) => state.error)
  const { activeNotice } = useSelector(
    (state) => state.notice
  )
  const { activeStory } = useSelector(
    (state) => state.story
  )
  const [formValue, setFormValue] = useState(initialForm)

  useEffect(() => {
    if (token === 'noticias' && activeNotice) {
      setFormValue(activeNotice)
    } else if (token === 'historias' && activeStory) {
      setFormValue(activeStory)
    }
  }, [token, activeNotice, activeStory])

  // Manejo de los cambios en el valor de los inputs
  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    })
  }
  // validacion del formulario
  const isFormValid = () => {
    if (validator.isEmpty(formValue.title)) {
      dispatch(setError('Titulo requiredo'))
      return false
    }
    if (!validator.isLength(formValue.title, { min: 6 })) {
      dispatch(setError('Minimo 6 caracteres'))
      return false
    }

    if (validator.isEmpty(formValue.body)) {
      dispatch(
        setError('Cuerpo de la publicacion requerido')
      )
      return false
    }

    if (
      !validator.isLength(formValue.body, {
        min: 50,
        max: 2000,
      })
    ) {
      dispatch(
        setError(
          'Cuerpo debe conenter almenos 50 caracteres y maximo 2000'
        )
      )
      return false
    }
    dispatch(uiRemoveError())
    return true
  }

  // agregar o modificar una historia o noticia
  const handleSaveOrModifiedItem = (e) => {
    e.preventDefault()

    if (isFormValid()) {
      if (token === 'noticias' && activeNotice) {
        // agrega una noticia
        dispatch(noticetStartUpdated(formValue))
        setFormValue(initialForm)
      } else if (token === 'noticias' && !activeNotice) {
        // actualiza unanoticia
        dispatch(startnoticeAddNew(formValue))
        setFormValue(initialForm)
      } else if (token === 'historias' && activeStory) {
        // agrega una historia
        dispatch(storyStartUpdated(formValue))
        setFormValue(initialForm)
      } else if (token === 'historias' && !activeStory) {
        // actualiza una historia
        dispatch(startstoryAddNew(formValue))
        setFormValue(initialForm)
      }
    }
  }

  // limpieza de inputs al salir del formulario
  const handleClearMessagesInputs = () => {
    dispatch(storyClearActive())
    dispatch(noticeClearActive())
    dispatch(uiRemoveError())
    setFormValue(initialForm)
    history.goBack()
  }

  return (
    <div className='container'>
      <form
        className='card shadow-sm p-3 mt-3'
        onSubmit={handleSaveOrModifiedItem}
      >
        <div className='form-group'>
          <button
            className='btn btn-link'
            type='button'
            onClick={handleClearMessagesInputs}
          >
            Volver
          </button>
        </div>
        <div className='form-group '>
          <label htmlFor='title'>Titulo</label>
          <input
            type='text'
            className={`form-control ${
              msgError.includes('Titulo') ||
              msgError.includes('Minimo')
                ? 'is-invalid'
                : ''
            }`}
            name='title'
            value={formValue.title}
            onChange={handleInputChange}
            placeholder='titulo'
            autoComplete='off'
          />
          {msgError.includes('Titulo') ||
          msgError.includes('Minimo') ? (
            <div className='invalid-feedback'>
              {msgError}
            </div>
          ) : null}
        </div>
        <div className='form-group'>
          <label htmlFor='cuerpo'>Cuerpo</label>
          <textarea
            className={`form-control ${
              msgError.includes('Cuerpo') ||
              msgError.includes('debe')
                ? 'is-invalid'
                : ''
            }`}
            name='body'
            rows='5'
            value={formValue.body}
            onChange={handleInputChange}
          ></textarea>
          {msgError.includes('Cuerpo') ||
          msgError.includes('debe') ? (
            <div className='invalid-feedback'>
              {msgError}
            </div>
          ) : null}
        </div>

        <div className='form-group'>
          <button className='btn primary' type='submit'>
            {activeNotice || activeStory
              ? 'Modificar'
              : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  )
}
