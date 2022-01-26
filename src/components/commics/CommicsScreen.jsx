import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '../cards/Pagination.jsx';
import WaitScreen from '../wait/WaitScreen';
import CommicCard from './CommicCard.jsx';

const CommicsScreen = () => {
  const { commics } = useSelector((state) => state.commic);
  const location = useLocation();
  const path = location.pathname.split('/');
  return (
    <div className='container-fluid py-3 animate__animated   animate__fadeIn'>
      <div className='container'>
        <div className='row'>
          {path.includes('profile') ? (
            <>
              <div className='col-md-6 mb-3'>
                <Pagination selector={'commic'} />
              </div>
              <div className='col-md-6 mb-3'>
                <Link
                  to='/profile/commics/crearCommic'
                  className='btn primary d-block w-100'
                >
                  Crear Commic <FaPlus />
                </Link>
              </div>
            </>
          ) : (
            <div className='col-md-12 mb-3'>
              <Pagination selector={'commic'} />
            </div>
          )}
          {commics === [] ? (
            <WaitScreen />
          ) : (
            commics.map((commic) => (
              <div className='col-md-4' key={commic.id}>
                <CommicCard {...commic} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default CommicsScreen;
