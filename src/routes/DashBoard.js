import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// Screens
import { HomeScreen } from '../components/home/HomeScreen'
import { CardReadScreen } from '../components/UI/CardRead/CardReadScreen'
import { OrganizationScreen } from '../components/organizations/OrganizationScreen'
import { NavbarScreen } from '../components/UI/NavbarScreen'
import { OrganizationCard } from '../components/organizations/OrganizationCard'
import { NoticeScreen } from '../components/noticies/NoticeScreen'
import { StoryScreen } from '../components/stories/StoryScreen'
import { CuentosView } from '../components/violence/CuentosView'
import { HistorietasView } from '../components/violence/HistorietasView'
import { RightSection } from '../components/violence/RightSection'

//chatbot
import Chatbot from 'react-chatbot-kit'
import config from '../chat/config'
import MessageParser from '../chat/MessageParser'
import ActionProvider from '../chat/ActionProvider'

//icons
import {
  BsChevronUp,
  BsFillChatSquareFill,
} from 'react-icons/bs'
import {
  uiCloseChat,
  uiOpenChat,
} from '../actions/uiActions'

export const DashBoard = () => {
  const { ChatOpen } = useSelector((state) => state.UI)

  const dispatch = useDispatch()

  const handlerDisplayChat = () => {
    if (ChatOpen) {
      dispatch(uiCloseChat())
    } else {
      dispatch(uiOpenChat())
    }
  }

  const routes = [
    {
      route: '/inicio',
      title: 'Inicio',
      id: 1,
    },
    { route: '/noticias', title: 'Noticias', id: 2 },
    {
      route: '/historias',
      title: 'Historias de vida',
      id: 3,
    },
    {
      route: '/organizaciones',
      title: 'Organizaciones',
      id: 4,
    },
    {
      route: '/aprendizaje',
      title: 'Aprendizaje',
      id: 5,
    },
  ]

  return (
    <>
      <NavbarScreen routes={routes} />
      <div>
        <Switch>
          <Route
            exact
            path='/noticias/:Id'
            component={CardReadScreen}
          />
          <Route
            path='/noticias'
            component={NoticeScreen}
          />

          <Route
            exact
            path='/historias/:Id'
            component={CardReadScreen}
          />
          <Route
            path='/historias'
            component={StoryScreen}
          />

          <Route
            exact
            path='/organizaciones/:organization_acronym'
            component={OrganizationCard}
          />
          <Route
            path='/organizaciones'
            component={OrganizationScreen}
          />

          <Route
            path='/aprendizaje/cuentos'
            component={CuentosView}
          />
          <Route
            path='/aprendizaje/historietas'
            component={HistorietasView}
          />
          <Route
            path='/aprendizaje/derechos'
            component={RightSection}
          />

          <Route path='/inicio' component={HomeScreen} />
          <Redirect to='/inicio' />
        </Switch>
      </div>

      <button className='btn primary rounded-circle returnTop animate__animated animate__shakeY'>
        <BsChevronUp size='2em' />
      </button>
      <button
        className='btn primary cursor chat  rounded animate__animated animate__rubberBand'
        onClick={handlerDisplayChat}
      >
        <BsFillChatSquareFill size='1em' />
      </button>

      {ChatOpen && (
        <div className='positions'>
          <div
            className={` animate__animated ${
              !ChatOpen
                ? 'animate__fadeInDown'
                : ' animate__fadeInUp'
            }`}
          >
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        </div>
      )}
    </>
  )
}
