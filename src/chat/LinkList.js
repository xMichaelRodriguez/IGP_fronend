import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

export const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li
      key={link.id}
      className='uk-card uk-card-default uk-card-body uk-width-1-1@m '
    >
      <blockquote className=' uk-text-justify highlight'>
        <p className='uk-card-title'>
          <BsChevronRight />
          {link.title}
        </p>
        <footer className=''>
          <span className='Source Title'>{link.text}</span>
        </footer>
      </blockquote>
    </li>
  ));
  return (
    <ul className='uk-list uk-margin-bottom ' style={{ listStyle: 'none' }}>
      {linkMarkup}
    </ul>
  );
};
