// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleDerechos = () => {
    const message = this.createChatBotMessage(
      "Fantástico, tengo los siguientes recursos para ti sobre derechos",
      {
        widget: "Derechos",
      }
    );

    this.updateChatbotState(message);
  };

  handleOrganizations = () => {
    const message = this.createChatBotMessage(
      "Fantástico, tengo los siguientes recursos para ti sobre las Organizaciones",
      {
        widget: "Organizaciones",
      }
    );

    this.updateChatbotState(message);
  };
  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hola, Amigo. Necesitas algo?"
    );

    this.updateChatbotState(greetingMessage);
  }

  queTalMessage() {
    const writeMessage = this.createChatBotMessage(
      "bien, con ganas de chatear contigo, amigo :)"
    );
    this.updateChatbotState(writeMessage);
  }

  messageNeged() {
    const writeMessage = this.createChatBotMessage(
      "ok, que tengas un lindo dia :)"
    );
    this.updateChatbotState(writeMessage);
  }

  messageSuccess() {
    const writeMessage = this.createChatBotMessage("Que quieres aprender?", {
      widget: "LearningOptions",
    });
    this.updateChatbotState(writeMessage);
  }
  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;