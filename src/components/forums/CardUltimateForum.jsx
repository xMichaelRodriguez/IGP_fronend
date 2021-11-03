import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import socketInstance from '../../helpers/Sockets';
import WaitScreen from '../wait/WaitScreen';

const CardUltimateForum = () => {
  const [ultimateForum, setUltimateForum] = useState({});
  const history = useHistory();
  useEffect(() => {
    socketInstance.emit('loading-active-foro');
    socketInstance.on('loaded-active-forums', (data) => {
      setUltimateForum({
        ...data,
        content: `${data.content.substr(0, 150)} ...`,
      });
    });
    return () => {
      setUltimateForum({});
    };
  }, [setUltimateForum]);

  return Object.entries(ultimateForum).length !== 0 ? (
    <div className='card p-1 mb-2 shadow-sm'>
      <blockquote className='blockquote mb-0 card-body'>
        <p className='font-weight-bold '>{ultimateForum.theme}</p>
        <small>{moment(ultimateForum.created).calendar()}</small>
        <footer className='blockquote-footer mb-3'>
          <small className='text-muted'>
            <cite title='Source Title'>{ultimateForum.content}</cite>
          </small>
        </footer>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={() => {
            /* eslint no-underscore-dangle:0 */
            history.push(`/foros/${ultimateForum._id}`);
          }}
        >
          Ver Foro
        </button>
      </blockquote>
    </div>
  ) : (
    <WaitScreen />
  );
};
export default CardUltimateForum;
