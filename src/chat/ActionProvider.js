// ActionProvider starter code
// class ActionProvider {
//   constructor(createChatBotMessage, setStateFunc, createClientMessage) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//   }

//   handleDerechos = () => {
//     const message = this.createChatBotMessage(
//       'Fantástico, tengo los siguientes recursos para ti sobre derechos',
//       {
//         widget: 'Derechos',
//       }
//     );

//     this.updateChatbotState(message);
//   };

//   handleOrganizations = () => {
//     const message = this.createChatBotMessage(
//       'Fantástico, tengo los siguientes recursos para ti sobre las Organizaciones',
//       {
//         widget: 'Organizaciones',
//       }
//     );

//     this.updateChatbotState(message);
//   };
//   greet() {
//     const greetingMessage = this.createChatBotMessage(
//       'Hola, Amigo. Necesitas algo?'
//     );

//     this.updateChatbotState(greetingMessage);
//   }

//   queTalMessage() {
//     const writeMessage = this.createChatBotMessage(
//       'bien, con ganas de chatear contigo, amigo :)'
//     );
//     this.updateChatbotState(writeMessage);
//   }

//   messageNeged() {
//     const writeMessage = this.createChatBotMessage(
//       'ok, que tengas un lindo dia :)'
//     );
//     this.updateChatbotState(writeMessage);
//   }

//   messageSuccess() {
//     const writeMessage = this.createChatBotMessage('Que quieres aprender?', {
//       widget: 'LearningOptions',
//     });
//     this.updateChatbotState(writeMessage);
//   }
//   updateChatbotState(message) {
//     // NOTE: This function is set in the constructor, and is passed in
//     // from the top level Chatbot component. The setState function here
//     // actually manipulates the top level state of the Chatbot, so it's
//     // important that we make sure that we preserve the previous state.

//     this.setState((prevState) => ({
//       ...prevState,
//       messages: [...prevState.messages, message],
//     }));
//   }
// }

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
  handleOrganizations = () => {
    const message = this.createChatBotMessage(
      'Fantástico, tengo los siguientes recursos para ti sobre Organizaciones',
      {
        withAvatar: true,
        widget: 'organizationsList',
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
