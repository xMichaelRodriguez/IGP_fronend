import React from 'react'
import { CommicCard } from '../../commics/CommicCard'

export const SearchCard = ({
  title,
  body,
  imageUrl,
  pulicImg_id,
  id,
  coverPage,
}) => {
  return (
    <div>
      {coverPage && (
        <CommicCard
          title={title}
          coverPage={coverPage}
          id={id}
        />
      )}
    </div>
  )
}
