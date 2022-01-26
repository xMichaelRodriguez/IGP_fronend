// Config starter code
import { createChatBotMessage } from 'react-chatbot-kit';
import { FaUserAstronaut } from 'react-icons/fa';
import GeneralOptions from './widgets/GeneralOptions';
import ListRights from './widgets/ListRights';

const nameBot = 'Secury-bot';
const config = {
  initialMessages: [createChatBotMessage(`Hola soy ${nameBot}`)],
  botName: nameBot,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#8f77f2',
    },
    chatButton: {
      backgroundColor: '#8f77f2',
    },
  },

  state: {
    options: [
      {
        title: 'Derecho a la vida',
        text: 'El derecho a la vida es un derecho universal, es decir que le corresponde a todo ser humano. Es un derecho necesario para poder concretizar todos los demás derechos universales. El derecho a la vida significa tener la oportunidad de vivir nuestra propia vida.',
        id: 1,
      },

      {
        title: 'Derecho a la identidad ',
        text: 'El derecho a la identidad permite que niñas y niños tengan un nombre y una nacionalidad desde su nacimiento. Además, es la puerta a sus otros derechos como el acceso a servicios de salud, educación y protección',
        id: 2,
      },
      {
        title: 'Derecho a la vida',
        text: 'El derecho a la vida es un derecho universal, es decir que le corresponde a todo ser humano. El derecho a la vida significa tener la oportunidad de vivir nuestra propia vida. ... Si no hay vida, no tiene sentido que existan los demás derechos fundamentales.',
        id: 3,
      },
      {
        title: 'Derecho a la igualdad ',
        text: 'Este derecho significa que todo ser humano debe ser reconocido como un igual ante la ley y disfrutar de todos sus derechos, sin discriminación por motivo de nacionalidad, raza o creencias',
        id: 4,
      },
      {
        title: 'Derecho a no ser discriminado',
        text: 'Es el derecho de todos los seres humanos a ser iguales en dignidad, a ser tratados con respeto y consideración y a participar sobre bases iguales en cualquier área de la vida económica, social, política, cultural o civil.',
        id: 5,
      },
    ],
    gist: '',
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: '#8f77f2',
          padding: '5px',
          borderRadius: '3px',
          fontSize: '0.8em',
          color: '#fff',
        }}
      >
        <FaUserAstronaut
          style={{
            marginLeft: '20px',
            marginRight: '10px',
          }}
        />
        Conversando con Secury-bot
      </div>
    ),
    botAvatar: (props) => <FaUserAstronaut />,
  },

  widgets: [
    {
      widgetName: 'GeneralOptions',
      widgetFunc: (props) => <GeneralOptions {...props} />,
      mapStateToProps: ['gist'],
    },
    {
      widgetName: 'humanRights',
      widgetFunc: (props) => <ListRights {...props} />,
      mapStateToProps: ['options'],
    },
  ],
};
export default config;
