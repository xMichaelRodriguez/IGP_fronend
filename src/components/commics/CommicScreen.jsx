import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { FaArrowCircleLeft } from 'react-icons/fa';

import {
  commicFindById,
  commitClearActive,
} from '../../actions/commicsActions';

import WaitScreen from '../wait/WaitScreen';

const CommicScreen = () => {
  const { activeCommic } = useSelector((state) => state.commic);
  const { commicId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commicFindById(commicId));
  }, [dispatch, commicId]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleBack = () => {
    dispatch(commitClearActive);
    history.goBack();
  };
  return (
    <div className='container-fluid py-5 '>
      <div className='container '>
        <button className='btn  mb-3' onClick={handleBack}>
          <div className='d-flex justify-content-between'>
            <FaArrowCircleLeft size='2em' /> &nbsp;{' '}
            <p className='font-weight-bold'> Regresar</p>
          </div>
        </button>
        <div className='d-flex justify-content-center'>
          {activeCommic !== null ? (
            <div className='d-block w-75 '>
              <Slider {...settings}>
                {activeCommic.gallery.map((img) => (
                  <div key={img.publicID}>
                    <img
                      className='card-img img-slider'
                      src={img.imageUrl}
                      alt={img.imageUrl}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <WaitScreen />
          )}
        </div>
      </div>
    </div>
  );
};
export default CommicScreen;
