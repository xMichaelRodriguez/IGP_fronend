import React from 'react';
import { useLocation } from 'react-router';
import { useOrganizations } from '../../hooks/useOrganizations';
import { OrganizationItem } from './OrganizationItem';

export const OrganizationScreen = () => {
  const location = useLocation();

  const { data: organizations, loading } = useOrganizations();
  return (
    <div className='container'>
      {loading && (
        <h1>
          <div className='d-flex justify-content-center'>
            <strong>Cargando...</strong>
            <div className='spinner-grow' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        </h1>
      )}
      <div className='row animate__animated   animate__fadeIn'>
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
