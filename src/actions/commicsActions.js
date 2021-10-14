import Swal from 'sweetalert2'
import {
  fetchAsync,
  fetchAsyncToCommics,
  fetchSync,
} from '../helpers/fetching'
import { types } from '../types/types'
import { uiRemoveError } from './authActios'
export const commicStartLoading = ({ page = 1 }) => {
  return async (dispatch) => {
    try {
      const response = await fetchSync(
        `commics?page=${page}`
      )
      const content = await response.json()
      if (content.ok) {
        delete content.ok
        dispatch(commicsLoaded(content))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const commicsLoaded = (commics) => ({
  type: types.commicLoaded,
  payload: commics,
})

export const commicFindById = (commicId) => {
  return async (dispatch) => {
    try {
      const response = await fetchSync(
        `commics/${commicId}`
      )
      const content = await response.json()

      if (content.ok) {
        delete content.ok

        dispatch(commicLoaded(content))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
const commicLoaded = (commic) => ({
  type: types.commicSetActive,
  payload: commic,
})

export const commitClearActive = () => ({
  type: types.commicClearActive,
})

export const commicStartDelted = (id) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: 'Esta seguro de Eliminarlo?',
        text: 'No podra revertir esto!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#8f77f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await fetchAsync(
            `commics/${id}`,
            'DELETE'
          )
          const content = await response.json()

          if (content.ok) {
            Swal.fire(
              'Eliminado!',
              content.msg + ' ha sido eliminado!',
              'success'
            )
          }
        }
      })
    } catch (error) {
      Swal.fire('Algo ha salido mal :(', error.msg, 'error')
    }
  }
}

export const commicStartAddNew = ({ commic = {} }) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Guardando...',
      text: 'Por favor espere...',
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
    })
    const response = await fetchAsyncToCommics(
      'commics/new',
      commic,
      'POST'
    )
    const content = await response.json()

    if (content.ok) {
      delete content.delete
      dispatch(commicsAddNew(content.commics))
      dispatch(uiRemoveError())
      Swal.close()
      Swal.fire(
        'Guardado!!',
        `El Commic:${commic.title} ha sido guardado`,
        'success'
      )
    }
  }
}
const commicsAddNew = (commic) => ({
  type: types.commicAdNew,
  payload: commic,
})
