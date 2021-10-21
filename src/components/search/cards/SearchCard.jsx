import React from 'react'
import { CommicCard } from '../../commics/CommicCard'
import { HomeWork } from '../../library/homeworks/HomeWork'

export const SearchCard = ({ title, id, coverPage }) => {
  return (
    <div>
      {coverPage && (
        <CommicCard
          title={title}
          coverPage={coverPage}
          id={id}
        />
      )}

      {title.toLowerCase().includes('deberes') && (
        <HomeWork title={title} />
      )}
    </div>
  )
}
