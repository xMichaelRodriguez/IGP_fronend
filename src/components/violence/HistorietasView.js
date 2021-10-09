import React from 'react'
import Slider from 'react-slick'

import commic1 from '../../img/COMMIC/1-COMMIC.png'
import commic2 from '../../img/COMMIC/2-COMMIC.png'
import commic3 from '../../img/COMMIC/3-COMMIC.png'
import commic4 from '../../img/COMMIC/4-COMMIC.png'
import commic5 from '../../img/COMMIC/5-commic.png'

export const HistorietasView = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='container-fluid py-3 animate__animated   animate__fadeIn'>
      <div className='container px-3'>
        <Slider {...settings}>
          <div>
            <img
              className='img-fluid'
              src={commic1}
              alt={commic1}
            />
          </div>
          <div>
            <img
              className='img-fluid'
              src={commic2}
              alt={commic2}
            />
          </div>
          <div>
            <img
              className='img-fluid'
              src={commic3}
              alt={commic3}
            />
          </div>
          <div>
            <img
              className='img-fluid'
              src={commic4}
              alt={commic4}
            />
          </div>
          <div>
            <img
              className='img-fluid'
              src={commic5}
              alt={commic5}
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}
