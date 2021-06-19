import moment from 'moment';
import 'moment/locale/es';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchSync } from '../../../helpers/fetching';

import { BsArrowReturnLeft } from 'react-icons/bs';
export const StoryCard = ({ history }) => {
  const { storyId } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    (async function () {
      const data = await fetchSync(`stories/${storyId}`);
      const body = await data.json();

      if (body.ok) {
        delete body.ok;
        setStory(body.stories);
      }
    })();
  }, [storyId]);
  if (story === {}) {
    return (
      <div className='d-flex justify-content-center m-auto'>
        <strong>Cargando...</strong>
        <div className='spinner-grow' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div
      className='animate__animated animate__fadeInDown '
      style={{
        margin: '20px',
        padding: '10px',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className=' uk-card uk-card-default uk-card-body uk-width-1-2@m  '>
        <div className='uk-card-title'>
          <h1>{story.title}</h1>
          <h6 className='text-muted'>{moment(story.date).calendar()}</h6>
        </div>

        <p className='uk-text-justify' style={{ fontSize: '20px' }}>
          {story.body}
        </p>

        <div className=''>
          <Link className='uk-button uk-button-text' to='/noticies'>
            <BsArrowReturnLeft size='1.5rem' /> Volver
          </Link>
        </div>
      </div>
    </div>
  );
};
