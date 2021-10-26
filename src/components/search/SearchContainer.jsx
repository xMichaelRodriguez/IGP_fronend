import React from 'react'

import { useSelector } from 'react-redux'
import { SearchCard } from './cards/SearchCard'

export const SearchContainer = ({ query }) => {
  const { commic, homeWorks } = useSelector(
    (state) => state
  )

  const arrToFilter = [...commic.commics, ...homeWorks]

  const arrFiltered = arrToFilter.filter(
    ({ title, body }) => {
      return title.includes(query) || body?.includes(query)
    }
  )

  return (
    <div className='card-columns'>
      {query !== ''
        ? arrFiltered.map((item) => (
            <div key={item.id}>
              <SearchCard {...item} />
            </div>
          ))
        : arrToFilter.map((item) => (
            <div className='' key={item.id}>
              <SearchCard {...item} />
            </div>
          ))}
    </div>
  )
}
