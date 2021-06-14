import React from 'react';

export const ViolenceScreen = () => {
  return (
    <div className=''>
      <section
        style={{
          backgroundColor: '#fff',
        }}
        className='p-3 mb-5   d-flex justify-content-center'
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
                src='https://www.unicef.org/argentina/sites/unicef.org.argentina/files/styles/hero_mobile/public/CVS-teaser_3.jpg?itok=2djE02Cw'
                alt='First slide'
              />
            </div>

            <div class='carousel-item'>
              <img
                class='d-block w-100'
                style={{ height: '300px' }}
                src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-05.jpg'
                alt='Third slide'
              />
            </div>

            <div class='carousel-item'>
              <img
                class='d-block w-100'
                style={{ height: '300px' }}
                src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-02.jpg'
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

      <section className='mb-3'>
        <h2 classNam='text-center'>Historietas</h2>
        <div className=' w-100 d-flex justify-content-center'>
          <img
            src='https://i.imgur.com/6qqDtWo.jpg'
            class='img-thumbnail w-100 '
            style={{ height: '600px' }}
          />
        </div>
      </section>
    </div>
  );
};
