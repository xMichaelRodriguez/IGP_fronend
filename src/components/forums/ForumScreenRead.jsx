import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { socketInstance } from '../../helpers/Sockets'

export const ForumScreenRead = () => {
  const [forum, setForum] = useState({})
  const { foroId } = useParams()
  useEffect(() => {
    socketInstance.emit('findById', { foroId }, (data) => {
      setForum(data.forum)
    })
    return () => {}
  }, [foroId])
  return (
    <div className='container-fluid py-5'>
      <div className='container p-3 bg-light'>
        {forum === {} && <h3>no se encontro el foro</h3>}
        <Link className='btn btn-link' to='/foros'>
          volver
        </Link>
        <p className='h3'>{forum.theme}</p>
        <span className='text-muted '>
          {moment(forum.created).calendar()}
        </span>

        <p className='lead mt-5'>{forum.content}</p>
        <div className='row mb-5 mt-5'>
          <div className='col-md-12'>
            <ul className='list-group'>
              <li className='list-group-item'>
                <blockquote className='blockquote card p-3'>
                  <span className='mb-0 '>michael</span>
                  <footer className='blockquote-footer'>
                    <cite title='Source Title'>
                      message adfsdf
                    </cite>
                  </footer>
                </blockquote>
              </li>
            </ul>
          </div>
        </div>

        <div className='row mt-5 mb-3'>
          <div className='col-md-12'>
            <div className='form-group'>
              <label htmlFor='inputUserName'>
                Tu Comentario
              </label>
              <textarea
                type='text'
                className='form-control'
                id='inputUserName'
                rows='5'
              ></textarea>
            </div>
          </div>
          <div className='col-md-12'>
            <button
              className='btn btn-outline-primary'
              type='button'
            >
              Comentar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
