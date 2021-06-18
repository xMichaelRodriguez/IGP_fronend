import React from 'react';
import { useLocation } from 'react-router';
import { useOrganizations } from '../../hooks/useOrganizations';
import { OrganizationItem } from './OrganizationItem';

export const OrganizationScreen = () => {
  const location = useLocation();

  const { data: organizations, loading } = useOrganizations();
  return (
    <div className='uk-container'>
      {loading && (
        <h1>
          <span>Cargando...</span>
          <span uk-spinner='ratio: 4.5'></span>
        </h1>
      )}
      <div
        className='uk-grid-small uk-child-width-1-3@s uk-flex-center animate__animated   animate__fadeIn'
        uk-grid=''
      >
        {!location.pathname.includes('/organizations')
          ? organizations.map(
              (organization) =>
                (organization.acronym.includes('CONNA') ||
                  organization.acronym.includes('MINEDUCYT') ||
                  organization.acronym.includes('PDDH')) && (
                  <OrganizationItem key={organization.id} {...organization} />
                )
            )
          : organizations.map(
              (organization) =>
                (organization.acronym.includes('CONNA') ||
                  organization.acronym.includes('MINEDUCYT') ||
                  organization.acronym.includes('ISNA') ||
                  organization.acronym.includes('PNC') ||
                  organization.acronym.includes('FGR') ||
                  organization.acronym.includes('PDDH')) && (
                  <OrganizationItem key={organization.id} {...organization} />
                )
            )}
      </div>
    </div>
  );
};
