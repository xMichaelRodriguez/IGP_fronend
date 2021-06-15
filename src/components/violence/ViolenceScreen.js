import React from 'react';

export const ViolenceScreen = () => {
  return (
    <div className='container'>
      <section
        style={{
          backgroundColor: '#fff',
        }}
        className='p-3 mb-5   d-flex justify-content-center animate__animated   animate__fadeIn'
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
                src='https://www.unicef.org/argentina/sites/unicef.org.argentina/files/styles/hero_mobile/public/CVS-teaser_3.jpg?itok=2djE02Cw'
                alt='slider of data'
              />
            </div>

            <div className='carousel-item'>
              <img
                className='d-block w-100'
                style={{ height: '300px' }}
                src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-05.jpg'
                alt='slider of data'
              />
            </div>

            <div className='carousel-item'>
              <img
                className='d-block w-100'
                style={{ height: '300px' }}
                src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-02.jpg'
                alt='slider of data'
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

      <section className='mb-5 animate__animated   animate__fadeIn'>
        <h2 className='text-center'>
          <ins>Historietas</ins>
        </h2>
        <div className=' w-100 d-flex justify-content-center'>
          <img
            src='https://i.imgur.com/6qqDtWo.jpg'
            className='img-thumbnail w-100 '
            alt='historieta'
            style={{ height: '600px' }}
          />
        </div>
      </section>

      <section className=' w-100 animate__animated   animate__fadeIn'>
        <h2 className='text-center'>
          <ins>Cuentos</ins>
        </h2>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='embed-responsive-item h-50'
            src='https://www.youtube.com/embed/eqA-rVwSZk8'
            title='Cuento'
          ></iframe>
        </div>
      </section>
    </div>
  );
};
