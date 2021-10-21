import React from 'react'
import { Link } from 'react-router-dom'

import studying from '../../../img/studying.svg'
export const HomeWorkRead = () => {
  return (
    <div className='container-fluid py-5 '>
      <div className='container py-5 text-break'>
        <div className='row mb-2'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link to='/'>Inicio</Link>
              </li>
              <li
                class='breadcrumb-item active'
                aria-current='page'
              >
                <Link to='/biblioteca'> Biblioteca</Link>
              </li>
              <li
                class='breadcrumb-item active'
                aria-current='page'
              >
                <span>Deberes</span>
              </li>
            </ol>
          </nav>
        </div>
        <h4 className='display-5 mb-3 font-weight-bold text-center text-muted'>
          Deberes que todo niño,niña y adolescente debe
          cumplir
        </h4>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6  mb-3 py-2'>
            <blockquote class='blockquote text-center '>
              <h5 className='mb-1  text-primary-custom '>
                1. RESPETAR Y OBEDECER A SUS PADRES
              </h5>
              <footer class='blockquote-footer py-2'>
                <cite title='Source Title '>
                  CUMPLIR LAS NORMAS DE LA CASA (Disciplina)
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  CUMPLIR CON LOS HORARIOS
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  MANTENER EL ORDEN Y LA LIMPIEZA
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className='col-md-6  mb-3 py-2'>
            <img
              className='card-img'
              src='http://padresycolegios.com/wp-content/uploads/2021/04/patria-potestad-copia.png'
              alt='respect ilustration'
            />
          </div>
          <div className='col-md-6  mb-3 py-2'>
            <img
              className='card-img'
              src={studying}
              alt='studying ilustration'
            />
          </div>
          <div className='col-md-6  mb-3 py-2 '>
            <blockquote class='blockquote text-center'>
              <h5 className='mb-1  text-primary-custom'>
                2. ESTUDIAR SATISFACTORIAMENTE
              </h5>
              <footer class='blockquote-footer py-2'>
                <cite title='Source Title '>
                  Estudiar diariamente las lecciones
                  recibidas
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  Cumplir con las tareas escolares
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  Llegar puntuales al colegio
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  No faltar sin motivo
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  Mantener buena conducta Con sus compañeros
                  y con los Profesores
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className='col-md-6  mb-3 py-2'>
            <blockquote class='blockquote text-center'>
              <h5 className='mb-1  text-primary-custom'>
                3. CUIDAR A SUS ASCENDIENTES EN SU
                ENFERMEDAD Y ANCIANIDAD
              </h5>
              <footer class='blockquote-footer py-1'>
                <cite title='Source Title '>
                  Cuidar a los padres y abuelitos cuando
                  ellos se enferman
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  Ser atentos con los miembros del hogar que
                  por su edad lo necesiten
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  Expresarles cariño y amor.
                </cite>
              </footer>
              <footer className='blockquote-footer py-1'>
                <cite title='Source Title '>
                  Escuchar sus consejos.
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className='col-md-6  mb-3 py-2'>
            <img
              className='card-img'
              src='https://st.depositphotos.com/1491558/2739/v/380/depositphotos_27398793-stock-illustration-old-in-wheelchairs-adapted-vehicle.jpg'
              alt='look after'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
