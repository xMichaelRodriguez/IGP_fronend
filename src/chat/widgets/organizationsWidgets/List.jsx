import React from 'react'

import { ListItem } from './ListItem'

export const List = (org) => {
  return (
    <>
      {
        (org.acronym.includes('CONNA') ||
          org.acronym.includes('MINEDUCYT') ||
          org.acronym.includes('ISNA') ||
          org.acronym.includes('PNC') ||
          org.acronym.includes('FGR') ||
          org.acronym.includes('PDDH')) && (
          <ListItem {...org} />

        )
      }
    </>
  )
}
