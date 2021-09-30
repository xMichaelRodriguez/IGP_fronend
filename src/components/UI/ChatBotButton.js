import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chatbot from 'react-chatbot-kit'

//icons
import { BsFillChatSquareDotsFill } from 'react-icons/bs'
// views
import ActionProvider from '../../chat/ActionProvider'
import MessageParser from '../../chat/MessageParser'
import config from '../../chat/config'
// actions
import {
  uiCloseChat,
  uiOpenChat,
} from '../../actions/uiActions'
export const ChatBotButton = () => {
  const { ChatOpen } = useSelector((state) => state.UI)

  const dispatch = useDispatch()

  const handlerDisplayChat = () => {
    if (ChatOpen) {
      dispatch(uiCloseChat())
    } else {
      dispatch(uiOpenChat())
    }
  }
  return (
    <>
      <button
        className='btn primary rounded-circle chat '
        onClick={handlerDisplayChat}
      >
        <BsFillChatSquareDotsFill size='2.5rem' />
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
