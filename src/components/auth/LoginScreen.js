import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import './style.css';
import validator from 'validator';
import { startLogin } from '../../actions/authActios';
import { useHistory } from 'react-router';
export const LoginScreen = () => {
  const { msgError } = useSelector((state) => state.error);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();

  const [ErrorE, setErrorE] = useState(true);
  const [ErrorP, setErrorP] = useState(true);

  const [formValue, handleInputChange] = useForm({
    email: 'admin@gmail.com',
    password: 'thePassword123',
  });
  const { email, password } = formValue;

  useEffect(() => {
    if (uid) {
      return history.push('/');
    }
  }, [uid, history]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLogin(email, password));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      setErrorE(false);
      return false;
    }

    if (password.length < 5) {
      setErrorP(false);
      return false;
    }
    setErrorE(true);
    setErrorP(true);
    return true;
  };

  return (
    <form className='container  login '>
      <div className='row login__box card '>
        <div className='col-md-12 mb-3'>
          <h2>login</h2>
        </div>
        <div className='col-md-12 mb-3'>
          <div class='form-group'>
            <label for='exampleFormControlInput1'>Email address</label>
            <input
              type='email'
              className={`form-control  ${!ErrorE && 'is-invalid'} `}
              id='exampleFormControlInput1'
              placeholder='name@example.com'
              name='email'
              value={email}
              onChange={handleInputChange}
              autoComplete='off'
            />
            {!ErrorE && <div class='invalid-feedback'>Correo invalido</div>}
          </div>
        </div>
        <div className='col-md-12 mb-3'>
          <div>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleInputChange}
              className={`form-control ${!ErrorP && 'is-invalid'} `}
              placeholder='password'
            />
            {!ErrorP && (
              <span class='invalid-feedback'>Contraseña invalida</span>
            )}
          </div>
        </div>
        {!!msgError && (
          <div class='alert alert-danger mt-2' role='alert'>
            {msgError}
          </div>
        )}
        <div className='col-md-12 mb-3 d-flex justify-content-center '>
          <button
            type='submit'
            className='btn primary--button'
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </form>
  );
};
