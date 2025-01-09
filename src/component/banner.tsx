import React from 'react';
import image3 from '../images/image3.png';
import './banner.css';

const Banner: React.FC = () => {
  return (
    <div>
      <img className="image" src={image3} alt="Banner" />
    </div>
  );
};

export default Banner;
