import React from 'react'
import { useLocation } from 'react-router'
import { useOrganizations } from '../../hooks/useOrganizations'
import { WaitScreen } from '../wait/WaitScreen'
import { OrganizationItem } from './OrganizationItem'

export const OrganizationScreen = () => {
  const location = useLocation()

  const { data: organizations, loading } =
    useOrganizations()
  return (
    <div className='container-fluid mt-3'>
      <div className='container'>
        {loading && <WaitScreen />}

        <div className='row'>
          {!location.pathname.includes('/organizations') &&
            organizations.map(
              (organization) =>
                (organization.acronym.includes('CONNA') ||
                  organization.acronym.includes(
                    'MINEDUCYT'
                  ) ||
                  organization.acronym.includes('ISNA') ||
                  organization.acronym.includes('PNC') ||
                  organization.acronym.includes('FGR') ||
                  organization.acronym.includes(
                    'PDDH'
                  )) && (
                  <OrganizationItem {...organization} />
                )
            )}
        </div>
      </div>
    </div>
  )
}
