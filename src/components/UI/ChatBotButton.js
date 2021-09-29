import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chatbot from 'react-chatbot-kit'

//icons
import { BsFillChatSquareFill } from 'react-icons/bs'
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
