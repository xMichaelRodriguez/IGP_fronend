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

  const handleLogin = () => {
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
    <div className='uk-container   login '>
      <div className='uk-grid login__box uk-card uk-card-default' uk-grid=''>
        <div className='uk-width-1-1'>
          <h2>login</h2>
        </div>
        <div className='uk-width-1-1'>
          <div>
            <input
              type='text'
              className={`uk-input  ${!ErrorE && 'uk-form-danger'} `}
              name='email'
              value={email}
              onChange={handleInputChange}
              placeholder='email'
            />
            {!ErrorE && (
              <span class='uk-label uk-label-danger'>Correo invalido</span>
            )}
          </div>
        </div>
        <div className='uk-width-1-1'>
          <div>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleInputChange}
              className={`uk-input ${!ErrorP && 'uk-form-danger'} `}
              placeholder='password'
            />
            {!ErrorP && (
              <span class='uk-label uk-label-danger'>Contraseña invalida</span>
            )}
          </div>
        </div>
        {!!msgError && (
          <h3>
            <span className='uk-label uk-label-danger'>{msgError}</span>
          </h3>
        )}
        <div className='uk-width-1-1 '>
          <button className='uk-button primary' onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
