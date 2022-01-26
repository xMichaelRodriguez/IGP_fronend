import React from 'react';
import CommicCard from '../../commics/CommicCard.jsx';
import HomeWork from '../../library/homeworks/HomeWork.jsx';

const SearchCard = ({ title, id, coverPage }) => {
  return (
    <div>
      {coverPage && <CommicCard title={title} coverPage={coverPage} id={id} />}

      {title.toLowerCase().includes('deberes') && <HomeWork title={title} />}
    </div>
  );
};
export default SearchCard;
