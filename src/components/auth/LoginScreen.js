import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import validator from 'validator';
import { useHistory } from 'react-router';
import logoApp from '../../UVS-APP.svg';
import useForm from '../../hooks/useForm';
import { setError, startLogin, uiRemoveError } from '../../actions/authActios';

const LoginScreen = () => {
  const { msgError } = useSelector((state) => state.error);
  const { uid } = useSelector((state) => state.auth);
  const [state, setState] = useState(0);
  const dispatch = useDispatch();

  const history = useHistory();

  const [formValue, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formValue;
  useEffect(() => {
    if (uid) {
      history.push('/');
    }
  }, [uid, history]);

  const handleLogin = (e) => {
    e.preventDefault();
    setState(1);
    if (isFormValid()) {
      dispatch(startLogin(email, password));
    }
  };

  const isFormValid = () => {
    setState(1);
    if (!validator.isEmail(email)) {
      dispatch(setError('no es un correo'));
      setState(0);
      return false;
    }

    if (password.length < 6) {
      dispatch(
        setError(
          'Contraseña debe contener mas de 6 caracteres, al menos una letra mayuscula y minuscula y tambien contener numeros ',
        ),
      );
      setState(0);
      return false;
    }
    setState(1);
    dispatch(uiRemoveError());
    return true;
  };

  return (
    <div className='container login__box px-5'>
      <div className='row  bg-light shadow  mt-5 mb-5'>
        <div className='col-md-8   py-3'>
          <h3 className='display-4 font-weight-bolder'>Inicio de Sesion</h3>
          <form className='w-100 d-block mt-5 needs-validation'>
            <div className='form-group'>
              <label htmlFor='correo'>Correo</label>
              <input
                id='correo'
                className={`form-control  ${
                  msgError.includes('correo') ? 'is-invalid' : ''
                } `}
                placeholder='name@example.com'
                name='email'
                value={email}
                onChange={handleInputChange}
                autoComplete='off'
              />
              {msgError.includes('correo') || msgError.includes('user not') ? (
                <small className='invalid-feedback'>{msgError}</small>
              ) : (
                ''
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                className={`form-control ${
                  msgError.includes('Contraseña Invalida') ||
                  msgError.includes('must contain a number')
                    ? 'is-invalid'
                    : ''
                } `}
                placeholder='password'
              />
              {msgError.includes('Contraseña Invalida') ? (
                <span className='invalid-feedback text-break'>{msgError}</span>
              ) : (
                ''
              )}
              {msgError.includes('must contain a number') ? (
                <span className='invalid-feedback text-break'>
                  debe contener numeros
                </span>
              ) : (
                ''
              )}
            </div>
            {state === 0 ? (
              <button
                type='submit'
                className='btn primary'
                onClick={handleLogin}
              >
                Iniciar Sesión
              </button>
            ) : (
              <button className='btn primary' type='button' disabled>
                <span
                  className='spinner-grow spinner-grow-sm'
                  role='status'
                  aria-hidden='true'
                ></span>
                Loading...
              </button>
            )}
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
          <p className='py-3'>Aprendamos y Avancemos Juntos</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
