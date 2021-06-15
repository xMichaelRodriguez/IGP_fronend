import React from 'react';
import { Link } from 'react-router-dom';

import { StoryScreen } from '../stories/StoryScreen';
import { BsArrowRight } from 'react-icons/bs';
import { NoticeScreen } from '../noticies/NoticeScreen';
import { OrganizationScreen } from '../organizations/OrganizationScreen';
export const HomeScreen = () => {
  return (
    <div className='container'>
      <section
        style={{
          backgroundColor: '#fff',
        }}
        className='p-3 mb-3    d-flex justify-content-center animate__animated   animate__fadeIn'
      >
        <div
          id='carouselExampleIndicators'
          className='carousel slide w-100'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'
            />
            <li data-target='#carouselExampleIndicators' data-slide-to='1' />
            <li data-target='#carouselExampleIndicators' data-slide-to='2' />
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                className='d-block img-fluid w-100'
                style={{ height: '300px' }}
                src='https://www.cetys.mx/noticias/wp-content/uploads/2020/11/No-Violencia-Contra-las-Mujeres-Comunicado.png'
                alt=''
              />
            </div>

            <div className='carousel-item'>
              <img
                className='d-block w-100'
                style={{ height: '300px' }}
                src='https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/front-cpva.jpg?itok=X0zWlaLz'
                alt=''
              />
            </div>

            <div className='carousel-item'>
              <img
                className='d-block w-100'
                style={{ height: '300px' }}
                src='https://www.elpaisdelosjovenes.com/wp-content/uploads/2020/03/violencia1.jpg'
                alt=''
              />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </section>

      <section
        style={{ backgroundColor: '#fff' }}
        className='animate__animated   animate__fadeIn'
      >
        <div className='row'>
          <div className='col-md-6 mt-auto mb-auto  text-center'>
            <h1 className='font-italic'>Una Vida De Seguridad UVS</h1>
            <p className='text-justify px-2' style={{ fontSize: '20px' }}>
              Es una Web App y App Móvil educativa que surge, para dar respuesta
              de forma organizada a la realidad salvadoreña de violencia en los
              niños, niñas y adolescentes, y la necesidad de trabajar de la mano
              con MINEDUCYT, CONNA para llevar información sobre la violencia a
              la vida de los niños, niñas y adolescentes, buscando así poder
              ayudar en la vida de ellos con el acceso a la información
              importante de los casos de violencia que podrían vivir y como
              podrían salir de ello.
            </p>
          </div>
          <div className='col-md-6 m-auto'>
            <img
              src='https://i.imgur.com/WNKowqR.jpg'
              alt=''
              className='img-fluid '
            />
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: '#fff' }}
        className='p-3 mb-3  animate__animated   animate__fadeIn'
      >
        <div className='row animate__animated   animate__fadeIn'>
          <div className='col-md-6'>
            <h4>Nuevas Historias</h4>
          </div>
          <div className='col-md-6'>
            <Link to='/stories' className='float-right'>
              <h4>
                Todas las historias <BsArrowRight />
              </h4>
            </Link>
          </div>
        </div>

        <StoryScreen />
      </section>
      <section style={{ backgroundColor: '#fff' }} className='p-3 mb-5   '>
        <div className='row animate__animated   animate__fadeIn '>
          <div className='col-md-6'>
            <h4>Nuevas Noticias</h4>
          </div>
          <div className='col-md-6'>
            <Link to='/noticies' className='float-right'>
              <h4 className=''>
                Todas las noticias <BsArrowRight />
              </h4>
            </Link>
          </div>
        </div>

        <NoticeScreen />
      </section>

      <section
        style={{ backgroundColor: '#fff' }}
        className='p-3 mb-5 animate__animated   animate__fadeIn'
      >
        <div className='row  '>
          <div className='col-md-6'>
            <h4>Organizaciones</h4>
          </div>
          <div className='col-md-6'>
            <Link to='/organizations' className='float-right'>
              <h4 className=''>
                Todas las Organizaciones <BsArrowRight />
              </h4>
            </Link>
          </div>
        </div>

        <OrganizationScreen />
      </section>
    </div>
  );
};
