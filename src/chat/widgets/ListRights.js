import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const ListRights = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className='card mb-3 shadow'>
      <div className='card-body'>
        <blockquote className=' blockquote'>
          <p className=''>
            <BsChevronRight />
            {link.title}
          </p>
          <div className='card-text'>
            <span className='blockquote-footer text-justify'>{link.text}</span>
          </div>
        </blockquote>
      </div>
    </li>
  ));
  return (
    <ul className='list-group mb-auto ' style={{ listStyle: 'none' }}>
      {linkMarkup}
    </ul>
  );
};

export default ListRights;
