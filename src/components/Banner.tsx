import React from "react";
import "../styles/components/banner.scss";

const Banner = ({ image, title, isHome }) => {
    return (
      <div className={`banner ${isHome ? 'home-banner' : 'about-banner'}`}>
        <img src={image} alt={title} />
        {title && <h1 className="banner-title">{title}</h1>}
      </div>
    );
  };
  
  export default Banner;
