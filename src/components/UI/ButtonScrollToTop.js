import React, { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { useWindowScroll } from 'react-use';

const ButtonScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) {
    return false;
  }
  return (
    <button
      onClick={scrollToTop}
      className='btn primary rounded-circle returnTop animate__animated animate__flash '
    >
      <BsChevronUp size='2.1rem' />
    </button>
  );
};
export default ButtonScrollToTop;
