import React from 'react'
import { Link } from 'react-router-dom'

export const ForumScreenRead = () => {
  return (
    <div className='container-fluid py-5'>
      <div className='container p-3 bg-light'>
        <Link className='btn btn-link' to='/foros'>
          volver
        </Link>
        <p className='h3'>titulo del foro</p>
        <span className='text-muted '>
          hoy a las 21:42 PM
        </span>

        <p className='lead mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vitae earum, optio aperiam aspernatur
          voluptatum tempora eveniet? Recusandae incidunt
          illum nihil. Voluptatum repellendus quia
          consectetur culpa error ducimus iste sunt libero.
        </p>
        <div className='row mb-5 mt-5'>
          <div className='col-md-12'>
            <ul className='list-group'>
              <li className='list-group-item'>
                <blockquote className='blockquote card p-3'>
                  <span className='mb-0 '>michael</span>
                  <footer class='blockquote-footer'>
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
        </div>
      </div>
    </div>
  )
}
