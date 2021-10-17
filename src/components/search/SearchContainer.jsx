import React from 'react'

import { useSelector } from 'react-redux'
import { SearchCard } from './cards/SearchCard'

export const SearchContainer = ({ query }) => {
  const { notice, story, commic } = useSelector(
    (state) => state
  )

  const arrToFilter = [
    ...notice.noticies,
    ...story.stories,
    ...commic.commics,
  ]

  const arrFiltered = arrToFilter.filter(
    ({ title, body }) => {
      return title.includes(query) || body?.includes(query)
    }
  )

  return (
    <div className='card-columns'>
      {arrFiltered.map((item) => (
        <div className='' key={item.id}>
          <SearchCard {...item} />
        </div>
      ))}
    </div>
  )
}
