// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import { LearningOptions } from "./LearningOptions";
import { LinkList } from "./LinkList";

import { FaUserAstronaut, FaUserCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const config = {
  botName: "UvsBot",
  initialMessages: [
    createChatBotMessage(
      "Hola soy UvsBot, estoy aqui para ayudar. Que quieres aprender?",
      {
        widget: "LearningOptions",
      }
    ),
  ],

  widgets: [
    {
      widgetName: "LearningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "Derechos",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            title: "Derecho a la vida",
            text: "El derecho a la vida es un derecho universal, es decir que le corresponde a todo ser humano. Es un derecho necesario para poder concretizar todos los demás derechos universales. El derecho a la vida significa tener la oportunidad de vivir nuestra propia vida.",
            id: 1,
          },

          {
            title: "Derecho a la identidad ",
            text: "El derecho a la identidad permite que niñas y niños tengan un nombre y una nacionalidad desde su nacimiento. Además, es la puerta a sus otros derechos como el acceso a servicios de salud, educación y protección",
            id: 2,
          },
          {
            title: "Derecho a la vida",
            text: "El derecho a la vida es un derecho universal, es decir que le corresponde a todo ser humano. El derecho a la vida significa tener la oportunidad de vivir nuestra propia vida. ... Si no hay vida, no tiene sentido que existan los demás derechos fundamentales.",
            id: 3,
          },
          {
            title: "Derecho a la igualdad ",
            text: "Este derecho significa que todo ser humano debe ser reconocido como un igual ante la ley y disfrutar de todos sus derechos, sin discriminación por motivo de nacionalidad, raza o creencias",
            id: 4,
          },
          {
            title: "Derecho a no ser discriminado",
            text: "Es el derecho de todos los seres humanos a ser iguales en dignidad, a ser tratados con respeto y consideración y a participar sobre bases iguales en cualquier área de la vida económica, social, política, cultural o civil.",
            id: 5,
          },
        ],
      },
    },
  ],
  // Defines an object of custom components that will replace the stock chatbot components.
  customComponents: {
    // Replaces the default header
    header: () => (
      <div
        className="d-flex justify-content-center title-break"
        style={{
          backgroundColor: "#6a1576",
          padding: "5px",
          borderRadius: "3px",
          color: "white",
          fontSize: "18px",
          height: 70,
        }}
      >
        <div className="m-auto">
          <FaUserAstronaut className="ml-2 mr-2" size="1.5rem" />

          <span className="font-weight-bold ">Conversando con UvsBot</span>
        </div>
      </div>
    ),

    // Defines an object that will be injected into the chatbot state, you can use this state in widgets for example
    state: {
      gist: "Active",
    },
    // Replaces the default bot avatar
    botAvatar: (props) => (
      <div
        className="bg-info title-white"
        style={{ height: 50, width: 37, marginRight: 10, borderRadius: "50px" }}
      >
        <FaUserAstronaut className=" mr-3 ml-1 mr-1" />
      </div>
    ),
    // Replaces the default bot chat message container
    // botChatMessage: (props) => <CustomChatMessage {...props} />,
    // Replaces the default user icon
    userAvatar: (props) => <FaUserCircle className="px-1 ml-2" />,
    // // Replaces the default user chat message
    // userChatMessage: (props) => <MyUserChatMessage {...props} />,
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "#6a1576",
      borderRadius: "10px",
    },
    chatButton: {
      backgroundColor: "#6a1576",
      borderRadius: "10px",
    },
  },
};

export default config;
