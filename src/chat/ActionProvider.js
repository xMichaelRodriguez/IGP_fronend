//  in ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  handleHello() {
    const message = this.createChatBotMessage(
      'Hola. Un placer conocerte.'
    )

    this.addMessageToBotState(message)
  }

  handleHumanRights = () => {
    const message = this.createChatBotMessage(
      'Fantástico, tengo los siguientes recursos para ti sobre tus derechos',
      {
        withAvatar: true,
        widget: 'humanRights',
      }
    )
    this.addMessageToBotState(message)
  }

  handleDefault = () => {
    const message = this.createChatBotMessage(
      'Como puedo ayudarte? Aquí está la descripción general',
      {
        withAvatar: true,
        widget: 'GeneralOptions',
      }
    )

    this.addMessageToBotState(message)
  }

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: '',
        infoBox: '',
      }))
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: '',
        infoBox: '',
      }))
    }
  }
}

export default ActionProvider
