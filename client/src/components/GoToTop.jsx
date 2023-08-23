import React, { useState, useEffect } from 'react';
import {PiArrowFatLinesUpFill} from 'react-icons/pi'

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`slide-top bg-secondary p-4 rounded-full text-4xl fixed bottom-10 right-10 text-white ${isVisible ? '' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <PiArrowFatLinesUpFill className=' text-black ' />
    </button>
  );
};

export default GoToTopButton;
