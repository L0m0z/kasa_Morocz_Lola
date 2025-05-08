import React, { useState } from "react";
import "../styles/components/slideshow.scss";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = pictures.length > 1;

  const next = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {hasMultiple && (
        <>
          <button onClick={prev} className="nav-button prev"><FaChevronLeft /></button>
          <button onClick={next} className="nav-button next"><FaChevronRight /></button>
          <div className="counter">{currentIndex + 1}/{pictures.length}</div>
        </>
      )}
    </div>
  );
};

export default Slideshow;