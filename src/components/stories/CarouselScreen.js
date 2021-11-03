import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import './story.css';

const CarouselScreen = () => {
  const { storyForCarousel } = useSelector((state) => state.story);

  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container-fluid primary py-5 animate__animated animate__fadeIn'>
      <div className='container py-3'>
        {Object.entries(storyForCarousel).length === 0 && (
          <h3>No Hay Historias</h3>
        )}

        <Slider {...settings}>
          {storyForCarousel.map((story) => (
            <CardItem key={story.id} route='historias' {...story} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default CarouselScreen;
