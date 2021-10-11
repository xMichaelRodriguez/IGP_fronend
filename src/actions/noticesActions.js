import { fetchAsync } from '../helpers/fetching';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { uiRemoveError } from './authActios';
import moment from 'moment';
export const startnoticeAddNew = (notice) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: 'Guardando...',
        text: 'Por favor espere...',
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      const modNotice = {
        ...notice,
        date: moment().toISOString(),
      };
      const resp = await fetchAsync(
        'noticies/newNotice',
        modNotice,
        'POST'
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(noticeAddNew(modNotice));
        Swal.close();
        Swal.fire(
          'Guardado!!',
          `La noticia:${notice.title} ha sido guardada`,
          'success'
        );
      }
      dispatch(uiRemoveError());
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };
};

const noticeAddNew = (notice) => ({
  type: types.noticeAddNew,
  payload: notice,
});

export const noticeStartLoading = ({
  page = 1,
  startDate = null,
  endDate = null,
}) => {
  return async (dipatch) => {
    try {
      let resp = null;
      if (startDate !== null && endDate !== null) {
        resp = await fetchAsync(
          `noticies/?page=${page}&startDate=${startDate}&endDate=${endDate}`
        );
      } else {
        resp = await fetchAsync(`noticies/?page=${page}`);
      }

      const body = await resp.json();

      if (body.ok) {
        delete body.ok;
        dipatch(noticeLoaded(body));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const noticeLoaded = (noticies) => ({
  type: types.noticeLoaded,
  payload: noticies,
});

export const noticetStartUpdated = (notice) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: 'Actualizando...',
        text: 'Por favor espere...',
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      const modNotice = {
        ...notice,
        date: moment(),
      };

      const resp = await fetchAsync(
        `noticies/editNotice/${notice.id}`,
        modNotice,
        'PUT'
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(noticetUpdated(body.noticies));
        dispatch(noticeClearActive());
        Swal.close();
        Swal.fire(
          'Noticia Actualizada',
          notice.title,
          'success'
        );
      } else {
        Swal.close();
        Swal.fire('Error', body.msg, 'error');
      }

      console.log(body.ok);
    } catch (error) {
      Swal.close();

      console.error(error);
    }
  };
};

const noticetUpdated = (notice) => ({
  type: types.noticeUpdated,
  payload: notice,
});

// export const noticeLogout = () => ({ type: types.noticeLogout });
export const startnoticeDeleted = (id) => {
  return async (dispatch) => {
    try {
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
          fetchAsync(
            `noticies/deleteNotice/${id}`,
            {},
            'DELETE'
          ).then((resp) =>
            resp.json().then((resp) => {
              if (resp.ok) {
                dispatch(noticeDeleted(id));
                dispatch(noticeStartLoading({}));
                Swal.fire(
                  'Noticia  Eliminada',
                  '',
                  'success'
                );
              } else {
                Swal.fire('Error', resp.msg, 'error');
              }
            })
          );
        }
      });
    } catch (error) {
      Swal.close();
      Swal.fire('Error', error, 'error');
      console.log(error);
    }
  };
};

const noticeDeleted = (id) => ({
  type: types.noticeDeleted,
  payload: id,
});

export const noticeSetActive = (notice) => ({
  type: types.noticeSetActive,
  payload: notice,
});

export const noticeClearActive = () => ({
  type: types.noticeClearActive,
});
