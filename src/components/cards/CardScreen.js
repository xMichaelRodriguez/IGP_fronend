import React from 'react'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import {
  noticeSetActive,
  startnoticeDeleted,
} from '../../actions/noticesActions'
import {
  startstoryDeleted,
  StorySetActive,
} from '../../actions/events'
export const CardScreen = ({
  data,
  route,
  mode,
  history,
}) => {
  const dispatch = useDispatch()

  const handleEdit = (data, route) => {
    if (route === 'noticias') {
      dispatch(noticeSetActive(data))
      history.push(`/profile/mantenimiento/${route}`)
    } else if (route === 'historias') {
      dispatch(StorySetActive(data))
      history.push(`/profile/mantenimiento/${route}`)
    }
  }
  const handleDelete = (data, route) => {
    if (route === 'noticias') {
      dispatch(startnoticeDeleted(data))
    } else if (route === 'historias') {
      dispatch(startstoryDeleted(data))
    }
  }

  const ComponentLoadingData = () => {
    if (
      data === [] ||
      data === undefined ||
      data === null
    ) {
      return (
        <h3 className='display-4'>
          No se encontraron Historias
        </h3>
      )
    } else {
      return Object.entries(data).length !== 0 ? (
        data.map((d) => (
          <div className='col-md-4  ' key={d.id}>
            <div className='card mb-3 shadow'>
              <img
                src={d.imageUrl}
                className='card-img-top'
                alt={d.imageUrl}
              />
              <div className='card-body'>
                <h5 className='card-title'>{d.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {moment(d.date).calendar()}
                </h6>
                <p className='card-text text-justify'>
                  {d.body.substr(0, 100)}...
                </p>
                {mode === 'profile' ? (
                  <>
                    <button
                      className='btn primary btn-sm dropdown-toggle'
                      type='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Opciones
                    </button>
                    <div className='dropdown-menu'>
                      <button
                        className='btn btn-secondary dropdown-item'
                        type='button'
                        onClick={() => handleEdit(d, route)}
                      >
                        Modificar
                      </button>
                      <button
                        className='btn btn-danger dropdown-item'
                        type='button'
                        onClick={() =>
                          handleDelete(d.id, route)
                        }
                      >
                        Eliminar
                      </button>
                    </div>
                  </>
                ) : (
                  <Link
                    to={`/${route}/${d.id}`}
                    className='btn btn-link'
                  >
                    Leer Ahora
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className='display-4'>
          No se encontraron Historias
        </h3>
      )
    }
  }
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <ComponentLoadingData />
        </div>
      </div>
    </div>
  )
}

CardScreen.propTypes = {
  data: Proptypes.array.isRequired,
  route: Proptypes.string.isRequired,
  mode: Proptypes.string.isRequired,
}
