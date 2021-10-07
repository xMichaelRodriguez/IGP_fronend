import { fetchAsync } from '../helpers/fetching'
import { types } from '../types/types'
import Swal from 'sweetalert2'
import { uiRemoveError } from './authActios'
import moment from 'moment'

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
          Swal.showLoading()
        },
      })

      const modStory = {
        ...story,
        date: moment(),
      }
      const resp = await fetchAsync(
        'stories/new',
        modStory,
        'POST'
      )
      const body = await resp.json()
      if (body.ok) {
        dispatch(storyAddNew(modStory))
        dispatch(uiRemoveError())
        Swal.close()
        Swal.fire(
          'Guardado!!',
          `La historia:${modStory.title} ha sido guardada`,
          'success'
        )
        dispatch(uiRemoveError())
      }
    } catch (error) {
      console.log(error)
      Swal.close()
    }
  }
}

const storyAddNew = (story) => ({
  type: types.storyAddNew,
  payload: story,
})

export const storyStartLoading = ({
  page = 1,
  startDate = null,
  endDate = null,
}) => {
  return async (dipatch) => {
    try {
      let resp = null
      if (startDate !== null && endDate !== null) {
        resp = await fetchAsync(
          `stories/?page=${page}&startDate=${startDate}&endDate=${endDate}`
        )
      } else {
        resp = await fetchAsync(`stories/?page=${page}`)
      }
      const body = await resp.json()

      if (body.ok) {
        delete body.ok

        dipatch(storyLoaded(body))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const storyLoaded = (stories) => ({
  type: types.storyLoaded,
  payload: stories,
})

export const storyForCarouselLoading = ({ page = 1 }) => {
  return async (dipatch) => {
    try {
      const resp = await fetchAsync(`stories/?page=${page}`)

      const body = await resp.json()

      if (body.ok) {
        delete body.ok

        dipatch(storyForCarouselLoaded(body))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const storyForCarouselLoaded = (stories) => ({
  type: types.storyForCarouselLoaded,
  payload: stories,
})
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
          Swal.showLoading()
        },
      })
      const history = {
        ...story,
        date: moment(),
      }

      const resp = await fetchAsync(
        `stories/${story.id}`,
        history,
        'PUT'
      )
      const body = await resp.json()

      if (body.ok) {
        dispatch(storyUpdated(story))
        dispatch(storyClearActive())

        Swal.close()
        Swal.fire(
          'Historia Actualizado',
          story.title,
          'success'
        )
        dispatch(uiRemoveError())
      } else {
        Swal.close()
        Swal.fire('Error', body.msg, 'error')
      }
    } catch (error) {
      Swal.close()

      console.log(error)
    }
  }
}

const storyUpdated = (story) => ({
  type: types.storyUpdated,
  payload: story,
})

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
          fetchAsync(`stories/${id}`, {}, 'DELETE').then(
            (resp) =>
              resp.json().then((resp) => {
                if (resp.ok) {
                  dispatch(storyDeleted(id))
                  dispatch(storyStartLoading({}))
                  Swal.fire(
                    'Historia  Eliminada',
                    '',
                    'success'
                  )
                } else {
                  Swal.fire('Error', resp.msg, 'error')
                }
              })
          )
        }
      })
    } catch (error) {
      Swal.close()
      Swal.fire('Error', error, 'error')
      console.log(error)
    }
  }
}

const storyDeleted = (id) => ({
  type: types.noticeDeleted,
  payload: id,
})

export const StorySetActive = (story) => ({
  type: types.storySetActive,
  payload: story,
})

export const storyClearActive = () => ({
  type: types.storyClearActive,
})
