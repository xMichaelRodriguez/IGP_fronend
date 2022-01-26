import Swal from 'sweetalert2';
import { fetchAsync, fetchSync } from '../helpers/fetching';
import socketInstance from '../helpers/Sockets';
import types from '../types/types';
// all modules
export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSync('auth', { email, password }, 'POST');
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-initDate', new Date().getTime());

      dispatch(login({ uid: body.uid, name: body.name }));
      dispatch(uiRemoveError());
    } else {
      body.errors
        ? dispatch(setError(body?.errors?.password.msg))
        : dispatch(setError(body.msg));
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchAsync('auth/renew');

    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem('token', body.token);

      localStorage.setItem('token-initDate', new Date().getTime());

      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      dispatch(checkingFish());
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

const checkingFish = () => ({
  type: types.authFinishChecking,
});
export const setError = (error) => ({
  type: types.setError,
  payload: error,
});

export const uiRemoveError = () => ({
  type: types.removeError,
});

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startForumDelete = (id = '', foroId = '') => {
  return async (dispatch) => {
    if (id !== '' && foroId !== '') {
      Swal.fire({
        title: 'Estas seguro?',
        text: ' No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8f77f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          socketInstance.emit('delete-comment', id, (err) => {
            Swal.fire({
              title: 'Error',
              msg: err,
              icon: 'error',
            });
            /* eslint-disable no-console */
            console.log(err);
          });

          socketInstance.on('deletedComment', (data) => {
            Swal.fire({
              title: 'Borrar Comentario',
              text: data,
              icon: 'success',
            });
            socketInstance.emit('load-comments', foroId);
          });
        }
      });
    }
  };
};
