import React from 'react';
import { useLocation } from 'react-router';
import { useOrganizations } from '../../hooks/useOrganizations';
import { OrganizationItem } from './OrganizationItem';

export const OrganizationScreen = () => {
  const location = useLocation();

  const { data: organizations, loading } = useOrganizations();
  return (
    <div className='row'>
      {loading && (
        <h1 className='d-flex justify-content-center'>Cargando...</h1>
      )}

      {!location.pathname.includes('/organizations') &&
        organizations.map(
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
  );
};
