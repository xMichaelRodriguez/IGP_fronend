import moment from 'moment';
import 'moment/locale/es';

import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { fetchSync } from '../../../helpers/fetching';

export const CardReadScreen = () => {
  const { Id } = useParams();
  const location = useLocation().pathname.split('/');
  const history = useHistory();
  let path = location[1].includes('noticias') ? 'noticies' : 'stories';
  console.log(path);
  const [dataToRead, setDataToRead] = useState({});
  useEffect(() => {
    (async function () {
      const data = await fetchSync(path + '/' + Id);
      const body = await data.json();

      if (body.ok) {
        delete body.ok;
        setDataToRead(body[path]);
      }
    })();
  }, [Id, path]);
  return Object.entries(dataToRead).length === 0 ? (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  ) : (
    <div className='card animate__animated   animate__fadeIn '>
      <div className='card-body'>
        <h1 className='card-title '>{dataToRead.title}</h1>
        <h6 class='card-subtitle mb-2 text-muted'>
          {moment(dataToRead.date).calendar()}
        </h6>

        <p
          className='text-justify card-text text-dark'
          style={{ fontSize: '20px' }}
        >
          {dataToRead.body}
        </p>

        <button className='btn btn-link' onClick={() => history.goBack()}>
          Volver
        </button>
      </div>
    </div>
  );
};
