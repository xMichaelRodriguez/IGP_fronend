import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export const LearningOptions = (props) => {
  const options = [
    {
      text: '¿Quieres saber cuáles son tus derechos fundamentales?',
      handler: props.actionProvider.handleDerechos,
      id: 1,
    },
    {
      text: '¿Quieres saber que organizaciones protegen tus derechos?',
      handler: props.actionProvider.handleOrganizations,
      id: 2,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <blockquote
      key={option.id}
      className='uk-padding-small primary cursor'
      style={{ borderRadius: '10px' }}
      onClick={option.handler}
    >
      <p className='uk-margin'>
        <FaChevronRight /> {option.text}
      </p>
    </blockquote>
  ));

  return (
    <div
      className='uk-container-small '
      style={{ marginRight: 'auto', padding: 5 }}
    >
      {optionsMarkup}
    </div>
  );
};
