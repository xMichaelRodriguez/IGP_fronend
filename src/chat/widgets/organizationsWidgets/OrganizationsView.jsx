import React from 'react'

import { WaitScreen } from '../../../components/wait/WaitScreen'
import { useOrganizations } from '../../../hooks/useOrganizations'
import { List } from './List.jsx'

export const OrganizationsView = () => {
  const { data: organization, loading } = useOrganizations()

  return (
    <>
      {loading && <WaitScreen />}

      <ul className='list-group mb-auto'>
        {organization.map((org) => (

          <List key={org.id} {...org} />
        ))}
      </ul>
    </>
  )
}
