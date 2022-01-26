import React from 'react';

import { useHistory, useLocation } from 'react-router';
import Pagination from './Pagination.jsx';

const SectionPaginate = () => {
  const location = useLocation();
  const param = location.pathname.split('/');
  const history = useHistory();
  return (
    <div className='container-fluid py-2'>
      <div className='container'>
        <div className='row'>
          {param[1] === 'profile' ? (
            <>
              <div className='col-md-6'>
                <Pagination selector={'story'} />
              </div>

              <div className='col-md-6'>
                <button
                  className='btn primary btn-block mb-3'
                  type='button'
                  onClick={() => {
                    history.push(`/profile/mantenimiento/${param[2]}`);
                  }}
                >
                  Nueva {param[2].split('s')}
                </button>
              </div>
            </>
          ) : (
            <div className='col-md-12 animate__animated animate__fadeIn'>
              <Pagination selector={'story'} subSelector='stories' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SectionPaginate;
