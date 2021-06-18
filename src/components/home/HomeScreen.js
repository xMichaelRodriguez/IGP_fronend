import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../UVS-APP.svg';
import { StoryScreen } from '../stories/StoryScreen';
import { BsArrowRight } from 'react-icons/bs';
import { NoticeScreen } from '../noticies/NoticeScreen';
import { OrganizationScreen } from '../organizations/OrganizationScreen';
export const HomeScreen = () => {
  return (
    <div className='uk-container'>
      <section className=' uk-margin uk-card uk-card-default uk-card-body animate__animated   animate__fadeIn '>
        <div uk-slideshow='animation: push'>
          <div
            className='uk-position-relative uk-visible-toggle uk-dark '
            tabIndex='-1'
            uk-slideshow='finite: true, min-height: 400; max-height:450'
          >
            <ul className='uk-slideshow-items uk-margin'>
              <li>
                <img
                  className='uk-width-1-1'
                  data-src='https://www.cetys.mx/noticias/wp-content/uploads/2020/11/No-Violencia-Contra-las-Mujeres-Comunicado.png'
                  width=''
                  height='400px'
                  style={{ height: '400px' }}
                  alt=''
                  uk-img=''
                />
              </li>
              <li>
                <img
                  className='uk-width-1-1'
                  data-src='https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/front-cpva.jpg?itok=X0zWlaLz'
                  width=''
                  height='400px'
                  style={{ height: '400px' }}
                  alt=''
                  uk-img=''
                />
              </li>
              <li>
                <img
                  className='uk-width-1-1 '
                  data-src='https://www.elpaisdelosjovenes.com/wp-content/uploads/2020/03/violencia1.jpg'
                  width=''
                  height='400px'
                  style={{ height: '400px' }}
                  alt=''
                  uk-img=''
                />
              </li>
            </ul>

            <Link
              to='#'
              className='uk-position-center-left uk-position-small uk-hidden-hover'
              uk-slidenav-previous=''
              uk-slideshow-item='previous'
            ></Link>
            <Link
              to='#'
              className='uk-position-center-right uk-position-small uk-hidden-hover'
              uk-slidenav-next=''
              uk-slideshow-item='next'
            ></Link>
          </div>
        </div>

        {/* <div
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
                alt=''
              />
            </div>

            <div className='carousel-item'>
              <img
                className='d-block w-100'
                style={{ height: '300px' }}
                alt=''
              />
            </div>

            <div className='carousel-item'>
              <img
                className='d-block w-100'
                style={{ height: '300px' }}
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
        </div> */}
      </section>

      <section className=' uk-margin uk-card uk-card-default uk-card-body animate__animated   animate__fadeIn'>
        <div className='uk-child-width-expand@s uk-text-center' uk-grid=''>
          <div className=''>
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
          <div className='uk-text-middle'>
            <img
              data-src={logo}
              className='uk-text-middle'
              width=''
              height=''
              alt=''
              uk-img=''
            />
          </div>
        </div>
      </section>

      <section className=' uk-margin uk-card uk-card-default uk-card-body '>
        <div className='uk-grid-column-small uk-grid-row-large' uk-grid=''>
          <div className='uk-padding-small'>
            <h4 className='uk-position-left uk-padding'>Nuevas Historias</h4>
          </div>
          <div className='uk-position-right uk-padding'>
            <Link className='uk-link-muted' to='/stories'>
              <h4>
                Ver Mas... <BsArrowRight />
              </h4>
            </Link>
          </div>
        </div>
        <hr class='uk-divider-icon' />
        <StoryScreen />
      </section>

      <section className='uk-margin uk-card uk-card-default uk-card-body  animate__animated   animate__fadeIn '>
        <div className='uk-grid-column-small uk-grid-row-large' uk-grid=''>
          <div className='uk-padding-small'>
            <h4 className='uk-position-left uk-padding'>Nuevas Noticias</h4>
          </div>
          <div className='uk-position-right uk-padding'>
            <Link className='uk-link-muted' to='/noticies'>
              <h4>
                Ver Mas... <BsArrowRight />
              </h4>
            </Link>
          </div>
        </div>
        <hr class='uk-divider-icon' />

        <NoticeScreen />
      </section>

      <section className='uk-margin uk-card uk-card-default uk-card-body animate__animated   animate__fadeIn'>
        <div
          className='uk-grid-column-small uk-grid-row-large animate__animated   animate__fadeIn'
          uk-grid=''
        >
          <div className='uk-padding-small'>
            <h4 className='uk-position-left uk-padding'>Organizaciones</h4>
          </div>
          <div className='uk-position-right uk-padding'>
            <Link className='uk-link-muted' to='/organizations'>
              <h4>
                Ver Mas...
                <BsArrowRight />
              </h4>
            </Link>
          </div>
        </div>
        <hr class='uk-divider-icon' />

        <OrganizationScreen />
      </section>
    </div>
  );
};
