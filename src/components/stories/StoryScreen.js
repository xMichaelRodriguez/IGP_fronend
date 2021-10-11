import 'moment/locale/es'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'

import { CardScreen } from '../cards/CardScreen'
import { SectionPaginate } from '../cards/SectionPaginate'
import { DatePickerScreen } from '../noticies/DatePickerScreen'
import { CarouselScreen } from './CarouselScreen'

export const StoryScreen = () => {
  const location = useLocation()
  const param = location.pathname.split('/')[1]
  const history = useHistory()
  const { storyArr } = useSelector(
    (state) => state.story.stories
  )

  return (
    <div className='animate__animated animate__fadeIn'>
      {param !== 'profile' && <CarouselScreen />}

      <DatePickerScreen rute='story' />
      <SectionPaginate />
      <CardScreen
        data={storyArr !== [] && storyArr}
        route='historias'
        mode={param}
        history={history}
      />
    </div>
  )
}
