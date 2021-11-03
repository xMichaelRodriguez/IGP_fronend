import moment from 'moment';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { useHistory } from 'react-router';

const CardForum = ({ theme, content, created, _id }) => {
  const history = useHistory();
  return (
    <div className='card p-1 mb-2'>
      <blockquote className='blockquote mb-0 card-body'>
        <p className='font-weight-bold '>{theme}</p>
        <small>
          <FaRegClock /> {moment(created).calendar()}
        </small>
        <div className='row p-1'>
          <button
            className='btn btn-outline-primary'
            type='button'
            onClick={() => {
              history.push(`/foros/${_id}`);
            }}
          >
            Ver Foro
          </button>
        </div>
      </blockquote>
    </div>
  );
};
export default CardForum;
