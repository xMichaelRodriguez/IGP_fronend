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
      className='p-3 primary  cursor text-break'
     
      onClick={option.handler}
    >
      <p className='m-auto text-break text-light' style={{fontSize:"1rem"}}>
        <FaChevronRight /> {option.text}
      </p>
    </blockquote>
  ));

  return (
    <div
      className='container p-3 text-break'
    
    >
      {optionsMarkup}
    </div>
  );
};
