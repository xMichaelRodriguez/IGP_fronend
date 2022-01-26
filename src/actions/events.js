import Swal from 'sweetalert2';
import { fetchAsync, fetchAsyncHistory } from '../helpers/fetching';
import types from '../types/types';
import { uiRemoveError } from './authActios';

export const startstoryAddNew = (story) => {
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

      const resp = await fetchAsyncHistory('stories/new', story, 'POST');

      const body = await resp.json();
      if (body.ok) {
        dispatch(storyAddNew(story));
        dispatch(uiRemoveError());
        Swal.close();
        Swal.fire(
          'Guardado!!',
          `La historia:${story.title} ha sido guardada`,
          'success',
        );
      }
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
      Swal.close();
    }
  };
};

export const storyAddNew = (story) => ({
  type: types.storyAddNew,
  payload: story,
});

export const storyStartLoading = ({
  page = 1,
  startDate = null,
  endDate = null,
}) => {
  return async (dipatch, getState) => {
    try {
      let resp = null;
      if (startDate !== null && endDate !== null) {
        resp = await fetchAsync(
          `stories/?page=${page}&startDate=${startDate}&endDate=${endDate}`,
        );
      } else {
        resp = await fetchAsyncHistory(`stories/?page=${page}`, '', 'GET');
      }
      const body = await resp.json();

      if (body.ok) {
        delete body.ok;

        dipatch(storyLoaded(body));
      }
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  };
};

const storyLoaded = (stories) => ({
  type: types.storyLoaded,
  payload: stories,
});

export const storyForCarouselLoading = ({ page = 1 }) => {
  return async (dipatch) => {
    try {
      const resp = await fetchAsync(`stories/?page=${page}`);

      const body = await resp.json();

      if (body.ok) {
        delete body.ok;

        dipatch(storyForCarouselLoaded(body));
      }
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  };
};

const storyForCarouselLoaded = (stories) => ({
  type: types.storyForCarouselLoaded,
  payload: stories,
});
export const storyStartUpdated = (story) => {
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
      const resp = await fetchAsyncHistory(`stories/${story.id}`, story, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        Swal.close();
        Swal.fire('Historia Actualizada!!!', story.title, 'success');
        dispatch(storyUpdated(story));
        dispatch(uiRemoveError());
        dispatch(storyClearActive());
      } else {
        Swal.close();
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      Swal.close();
      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  };
};

export const storyUpdated = (story) => ({
  type: types.storyUpdated,
  payload: story,
});

export const startstoryDeleted = (id) => {
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
          fetchAsync(`stories/${id}`, {}, 'DELETE').then((resp) =>
            resp.json().then((response) => {
              if (response.ok) {
                dispatch(storyDeleted(id));
                dispatch(storyStartLoading({}));
                Swal.fire('Historia  Eliminada', '', 'success');
              } else {
                Swal.fire('Error', response.msg, 'error');
              }
            }),
          );
        }
      });
    } catch (error) {
      Swal.close();

      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  };
};

const storyDeleted = (id) => ({
  type: types.noticeDeleted,
  payload: id,
});

export const StorySetActive = (story) => ({
  type: types.storySetActive,
  payload: story,
});

export const storyClearActive = () => ({
  type: types.storyClearActive,
});
