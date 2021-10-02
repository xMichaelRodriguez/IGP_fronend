class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider
    this.state = state
  }

  parse(message) {
    const lowerCase = message.toLowerCase()
    if (lowerCase.includes('hola')) {
      return this.actionProvider.handleHello()
    }

    if (
      lowerCase.includes('derechos') ||
      lowerCase.includes(
        '¿Quieres saber cuáles son tus derechos fundamentales'
      )
    ) {
      return this.actionProvider.handleHumanRights()
    }
    if (
      lowerCase.includes('organizaciones') ||
      lowerCase.includes('org') ||
      lowerCase.includes(
        '¿Quieres saber que organizaciones?'
      )
    ) {
      return this.actionProvider.handleOrganizations()
    }

    return this.actionProvider.handleDefault()
  }
}
export default MessageParser
