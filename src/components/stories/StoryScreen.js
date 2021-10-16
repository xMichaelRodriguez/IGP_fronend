import 'moment/locale/es'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { storyForCarouselLoading, storyStartLoading } from '../../actions/events'

import { CardScreen } from '../cards/CardScreen'
import { SectionPaginate } from '../cards/SectionPaginate'
import { DatePickerScreen } from '../noticies/DatePickerScreen'
import { CarouselScreen } from './CarouselScreen'

export const StoryScreen = () => {

  const location = useLocation()
  const param = location.pathname.split('/')[1]
  const history = useHistory()
  const { stories } = useSelector(
    (state) => state.story
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(storyStartLoading({}))
    dispatch(storyForCarouselLoading({}))
  }, [dispatch])
  return (
    <div className='animate__animated animate__fadeIn'>
      {param !== 'profile' && <CarouselScreen />}

      <DatePickerScreen rute='story' />
      <SectionPaginate />
      <CardScreen
        data={stories !== [] && stories}
        route='historias'
        mode={param}
        history={history}
      />
    </div>
  )
}
