// // MessageParser starter code
// class MessageParser {
//   constructor(actionProvider, state) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

//   parse(message) {
//     const lowerCaseMessage = message.toLowerCase();

//     if (
//       lowerCaseMessage.includes("hola") ||
//       lowerCaseMessage.includes("holaaaa") ||
//       lowerCaseMessage.includes("alguien") ||
//       lowerCaseMessage.includes("alguien en casa") ||
//       lowerCaseMessage.length < 1
//     ) {
//       this.actionProvider.greet();
//     }

//     if (lowerCaseMessage.includes("no")) {
//       this.actionProvider.messageNeged();
//     }

//     if (lowerCaseMessage.includes("si")) {
//       this.actionProvider.messageSuccess();
//     }

//     if (lowerCaseMessage.includes("que tal")) {
//       this.actionProvider.queTalMessage();
//     }

//     if (lowerCaseMessage.includes("derechos")) {
//       this.actionProvider.handleDerechos();
//     }
//     if (lowerCaseMessage.includes("organizaciones")) {
//       this.actionProvider.handleOrganizations();
//     }
//   }
// }

// export default MessageParser;

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
