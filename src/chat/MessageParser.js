// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("hola") ||
      lowerCaseMessage.includes("alguien")
    ) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("derechos")) {
      this.actionProvider.handleDerechos();
    }
    if (lowerCaseMessage.includes("organizaciones")) {
      this.actionProvider.handleOrganizations();
    }
  }
}

export default MessageParser;
