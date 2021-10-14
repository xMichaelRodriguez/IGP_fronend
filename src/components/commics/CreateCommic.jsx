import React from 'react'
import { FaSave } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  setError,
  uiRemoveError,
} from '../../actions/authActios'
import { commicStartAddNew } from '../../actions/commicsActions'
import { useForm } from '../../hooks/useForm'
import { useFormFile } from '../../hooks/useFormFile'

const initialState = {
  title: '',
  coverPage: '',
  image1: '',
  image2: '',
  image3: '',
  image4: '',
  image5: '',
}
export const CreateCommic = () => {
  const [formValue, handleInputChangeFile] =
    useFormFile(initialState)
  const { msgError } = useSelector((state) => state.error)
  const dispatch = useDispatch()
  const [formvalue, handleInputChange] = useForm({
    title: 'Commic #4',
  })
  initialState.title = formvalue.title

  const formValid = () => {
    if (formValue.coverPage.length <= 0) {
      dispatch(setError('Portada requerida'))
      return false
    }
    if (formValue.image1.length <= 0) {
      dispatch(setError('Imagen 1 requerida'))
      return false
    }
    if (formValue.image2.length <= 0) {
      dispatch(setError('Imagen 2 requerida'))
      return false
    }
    if (formValue.image3.length <= 0) {
      dispatch(setError('Imagen 3 requerida'))
      return false
    }
    if (formValue.image4.length <= 0) {
      dispatch(setError('Imagen 4 requerida'))
      return false
    }
    if (formValue.image5.length <= 0) {
      dispatch(setError('Imagen 5 requerida'))
      return false
    }
    dispatch(uiRemoveError())
    return true
  }

  const handleSave = () => {
    if (formValid()) {
      dispatch(commicStartAddNew({ commic: formValue }))
    }
  }
  return (
    <form className='container-fluid py-5 needs-validation'>
      <div className='container py-3 card shadow'>
        <h3 className='display-4 mb-3'>
          Creación de Commics
        </h3>
        <p className='text-muted'>
          Los Commics deben de ser solamente de 5 imagenes
        </p>
        <div className='row p-3'>
          <div className='col-md-12'>
            <label htmlFor='commiictitle'>
              Titulo del Commic
            </label>
            <input
              type='text'
              className='form-control'
              id='commiictitle'
              value={formvalue.title}
              onChange={handleInputChange}
              name='title'
            />
            <div className='valid-feedback'>
              Looks good!
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='coverPage'>
              Imagen de portada
            </label>
            <div className='custom-file'>
              <input
                accept='image/*'
                type='file'
                className={` custom-file-input ${
                  msgError.includes('Portada ')
                    ? 'is-invalid'
                    : ''
                }`}
                id='coverPage'
                lang='es'
                name='coverPage'
                onChange={handleInputChangeFile}
              />
              <label
                className='custom-file-label text-break'
                htmlFor='coverPage'
              >
                Seleccionar Archivo
              </label>

              {msgError.includes('Portada ') && (
                <div className='invalid-feedback'>
                  {msgError}
                </div>
              )}
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='image1'>
              Imagen 1 del commic
            </label>
            <div className='custom-file'>
              <input
                accept='image/*'
                type='file'
                className={` custom-file-input ${
                  msgError.includes('Imagen 1 ')
                    ? 'is-invalid'
                    : ''
                }`}
                id='image1'
                lang='es'
                name='image1'
                onChange={handleInputChangeFile}
              />
              <label
                className='custom-file-label text-break'
                htmlFor='image1'
              >
                Seleccionar Archivo
              </label>
              {msgError.includes('Imagen 1') && (
                <div className='invalid-feedback'>
                  {msgError}
                </div>
              )}
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='image2'>
              Imagen 2 del commic
            </label>
            <div className='custom-file'>
              <input
                accept='image/*'
                type='file'
                className={` custom-file-input ${
                  msgError.includes('Imagen 2 ')
                    ? 'is-invalid'
                    : ''
                }`}
                id='image2'
                lang='es'
                name='image2'
                onChange={handleInputChangeFile}
              />
              <label
                className='custom-file-label text-break'
                htmlFor='image2'
              >
                Seleccionar Archivo
              </label>
              {msgError.includes('2') && (
                <small className='invalid-feedback'>
                  {msgError}
                </small>
              )}
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='image3'>
              Imagen 3 del commic
            </label>
            <div className='custom-file'>
              <input
                accept='image/*'
                type='file'
                className={` custom-file-input ${
                  msgError.includes('Imagen 3 ')
                    ? 'is-invalid'
                    : ''
                }`}
                id='image3'
                lang='es'
                name='image3'
                onChange={handleInputChangeFile}
              />
              <label
                className='custom-file-label text-break'
                htmlFor='image3'
              >
                Seleccionar Archivo
              </label>
              {msgError.includes('3') && (
                <small className='invalid-feedback'>
                  {msgError}
                </small>
              )}
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='image4'>
              Imagen 4 del commic
            </label>
            <div className='custom-file'>
              <input
                accept='image/*'
                type='file'
                className={` custom-file-input ${
                  msgError.includes('Imagen 4 ')
                    ? 'is-invalid'
                    : ''
                }`}
                id='image4'
                name='image4'
                lang='es'
                onChange={handleInputChangeFile}
              />
              <label
                className='custom-file-label text-break'
                htmlFor='image4'
              >
                Seleccionar Archivo
              </label>
              {msgError.includes('4') && (
                <small className='invalid-feedback'>
                  {msgError}
                </small>
              )}
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='image5'>
              Imagen 5 del commic
            </label>
            <div className='custom-file'>
              <input
                accept='image/*'
                type='file'
                className={` custom-file-input ${
                  msgError.includes('Imagen 5 ')
                    ? 'is-invalid'
                    : ''
                }`}
                id='image4'
                name='image5'
                lang='es'
                onChange={handleInputChangeFile}
              />
              <label
                className='custom-file-label text-break'
                htmlFor='image4'
              >
                Seleccionar Archivo
              </label>
              {msgError.includes('5') && (
                <small className='invalid-feedback'>
                  {msgError}
                </small>
              )}
            </div>
          </div>
        </div>

        <button
          type='button'
          className='btn primary'
          onClick={handleSave}
        >
          <FaSave size='1.5em' /> Guardar
        </button>
      </div>
    </form>
  )
}
