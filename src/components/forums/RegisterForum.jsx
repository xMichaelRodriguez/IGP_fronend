import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import validator from 'validator';
import useForm from '../../hooks/useForm';
import socketInstance from '../../helpers/Sockets';
import { startLoginForum } from '../../actions/forumsAction';

const RegisterForum = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange] = useForm({
    userName: '',
  });
  const { userName } = formValue;
  const handleRegister = (e) => {
    e.preventDefault();
    if (validator.isEmpty(userName)) {
      Swal.fire({
        title: 'Error',
        text: 'Apodo necesario para registrar',
        icon: 'error',
      });
    } else if (!validator.isLength(userName, { max: 10, min: 3 })) {
      Swal.fire({
        title: 'Error',
        text: 'Apodo debe contener minimo 3 caracteres y maximo 10',
        icon: 'error',
      });
    } else {
      socketInstance.emit(
        'register',
        {
          userName,
        },
        (data) => {
          dispatch(startLoginForum(data));
        },
      );
    }
  };
  return (
    <form className='container' onSubmit={handleRegister}>
      <div className='form-group mb-3'>
        <label htmlFor='exampleInputEmail1'>Apodo</label>
        <input
          type='text'
          name='userName'
          value={userName}
          onChange={handleInputChange}
          className='form-control'
          aria-describedby='apodoHelp'
          autoComplete='off'
        />
        <small id='apodoHelp' className='form-text text-muted'>
          Por favor no utilizar su nombre :)
        </small>
      </div>
      <button type='submit' className='btn primary'>
        Registrar
      </button>
    </form>
  );
};
export default RegisterForum;
