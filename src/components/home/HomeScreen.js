import React from 'react';
import { Link } from 'react-router-dom';

import { StoryScreen } from '../stories/StoryScreen';
import { BsArrowRight } from 'react-icons/bs';
import { NoticeScreen } from '../noticies/NoticeScreen';
import { Fragment } from 'react';
import { OrganizationScreen } from '../organizations/OrganizationScreen';
export const HomeScreen = () => {
  return (
    <Fragment>
      <section
        style={{
          backgroundColor: '#fff',
        }}
        className='p-3 mb-3    d-flex justify-content-center'
      >
        <div
          id='carouselExampleIndicators'
          class='carousel slide w-100'
          data-ride='carousel'
        >
          <ol class='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              class='active'
            />
            <li data-target='#carouselExampleIndicators' data-slide-to='1' />
            <li data-target='#carouselExampleIndicators' data-slide-to='2' />
          </ol>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img
                class='d-block img-fluid w-100'
                style={{ height: '300px' }}
                src='https://www.cetys.mx/noticias/wp-content/uploads/2020/11/No-Violencia-Contra-las-Mujeres-Comunicado.png'
                alt='First slide'
              />
            </div>

            <div class='carousel-item'>
              <img
                class='d-block w-100'
                style={{ height: '300px' }}
                src='https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/front-cpva.jpg?itok=X0zWlaLz'
                alt='Third slide'
              />
            </div>

            <div class='carousel-item'>
              <img
                class='d-block w-100'
                style={{ height: '300px' }}
                src='https://www.elpaisdelosjovenes.com/wp-content/uploads/2020/03/violencia1.jpg'
                alt='Third slide'
              />
            </div>
          </div>
          <a
            class='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true' />
            <span class='sr-only'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true' />
            <span class='sr-only'>Next</span>
          </a>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff' }}>
        <div className='row'>
          <div className='col-md-6 mt-auto mb-auto  text-center'>
            <h1 className='font-italic'>Una Vida De Seguridad UVS</h1>
            <p className='text-justify px-2' style={{ fontSize: '20px' }}>
              es una Web App y App Móvil educativa que surge, para dar respuesta
              de forma organizada a la realidad salvadoreña de violencia en los
              niños, niñas y adolescentes, y la necesidad de trabajar de la mano
              con MINEDUCYT, CONNA para llevar información sobre la violencia a
              la vida de los niños, niñas y adolescentes, buscando así poder
              ayudar en la vida de ellos con el acceso a la información
              importante de los casos de violencia que podrían vivir y como
              podrían salir de ello.
            </p>
          </div>
          <div className='col-md-6 mt-auto mb-auto'>
            <img src='https://i.imgur.com/WNKowqR.jpg' className='img-fluid' />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff' }} className='p-3 mb-3  '>
        <div className='d-flex justify-content-between animate__animated   animate__fadeIn'>
          <h4>Nuevas Historias</h4>
          <Link to='/stories'>
            <h4>
              Todas las historias <BsArrowRight />
            </h4>
          </Link>
        </div>
        <hr />
        <StoryScreen />
      </section>
      <section style={{ backgroundColor: '#fff' }} className='p-3 mb-5   '>
        <div className='d-flex justify-content-between animate__animated   animate__fadeIn '>
          <h4>Nuevas Noticias</h4>
          <Link to='/noticies'>
            <h4 className=''>
              Todas las noticias <BsArrowRight />
            </h4>
          </Link>
        </div>
        <hr />
        <NoticeScreen />
      </section>

      <section style={{ backgroundColor: '#fff' }} className='p-3 mb-5 '>
        <div className='d-flex justify-content-between animate__animated   animate__fadeIn '>
          <h4>Organizaciones</h4>
          <Link to='/organizations'>
            <h4 className=''>
              Todas las Organizaciones <BsArrowRight />
            </h4>
          </Link>
        </div>
        <hr />
        <OrganizationScreen />
      </section>
    </Fragment>
  );
};
