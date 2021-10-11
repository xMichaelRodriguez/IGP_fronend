import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { WaitScreen } from '../wait/WaitScreen';
import { OrganizationItem } from './OrganizationItem';

export const OrganizationScreen = () => {
  const location = useLocation();
  const { organizaciones } = useSelector(
    (state) => state.org
  );

  return (
    <div className='container-fluid mt-3 animate__animated animate__fadeIn'>
      <div className='container'>
        {Object.entries(organizaciones).length === 0 && (
          <WaitScreen />
        )}

        <div className='card-columns'>
          {!location.pathname.includes('/organizations') &&
            organizaciones.map((org) => (
              <div key={org.id}>
                <OrganizationItem {...org} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
