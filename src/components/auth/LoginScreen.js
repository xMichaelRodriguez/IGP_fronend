import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.css'
import logoApp from '../../UVS-APP.svg'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { startLogin } from '../../actions/authActios'
import { useHistory } from 'react-router'

export const LoginScreen = () => {
  const { msgError } = useSelector((state) => state.error)
  const { uid } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const history = useHistory()

  const [ErrorE, setErrorE] = useState(true)
  const [ErrorP, setErrorP] = useState(true)

  const [formValue, handleInputChange] = useForm({
    email: '',
    password: '',
  })
  const { email, password } = formValue

  useEffect(() => {
    if (uid) {
      return history.push('/')
    }
  }, [uid, history])

  const handleLogin = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(startLogin(email, password))
    }
  }

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      setErrorE(false)
      return false
    }

    if (password.length < 5) {
      setErrorP(false)
      return false
    }
    setErrorE(true)
    setErrorP(true)
    return true
  }

  return (
    <div className='container login__box px-5'>
      <div className='row  bg-light shadow  mt-5 mb-5'>
        <div className='col-md-8   py-3'>
          <h3 className='display-4 font-weight-bolder'>
            Inicio de Sesion
          </h3>
          <form className='w-100 d-block mt-5 '>
            <div class='form-group'>
              <label htmlFor='correo'>Correo</label>
              <input
                id='correo'
                className={`form-control  ${
                  !ErrorE && 'is-invalid'
                } `}
                placeholder='name@example.com'
                name='email'
                value={email}
                onChange={handleInputChange}
                autoComplete='off'
              />
              {!ErrorE && (
                <small className='invalid-feedback'>
                  Correo invalido
                </small>
              )}
            </div>
            <div class='form-group'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                className={`form-control ${
                  !ErrorP && 'is-invalid'
                } `}
                placeholder='password'
              />
              {!ErrorP && (
                <span className='invalid-feedback'>
                  Contraseña invalida
                </span>
              )}
            </div>
            {!!msgError && (
              <div
                className='alert alert-danger mt-2'
                role='alert'
              >
                {msgError}
              </div>
            )}
            <button
              type='submit'
              className='btn primary'
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className='col-md-4 py-3 primary '>
          <img
            className=' mx-auto d-block img-fluid  image-content'
            src={logoApp}
            width='300rem'
            height='300rem'
            alt='uvs logo'
          />
          <p className='py-3'>
            Aprendamos y Avancemos Juntos
          </p>
        </div>
      </div>
    </div>
  )
}
