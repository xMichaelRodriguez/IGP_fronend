import React from 'react'
import LearnImage from '../../img/undraw_book_reading_kx9s.svg'
export const HeroScreen = () => {
  return (
    <div className='container-fluid primary  py-5 '>
      <div className='container'>
        <div className='row '>
          <div className=' col-md-6'>
            <h3 className='font-weight-bold display-4'>
              Una Vida Segura Enseña
            </h3>
            <p className='text-justify lead'>
              Enriqueze el proceso de enseñanza sobre temas
              de violencia y abuso de niños, niñas y
              adolescentes atravez del uso de una web app
            </p>
          </div>
          <div className='col-md-6'>
            <img
              className='img-fluid float-left'
              src={LearnImage}
              alt='learn image'
              title='Learn Image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
