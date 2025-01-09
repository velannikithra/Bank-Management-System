import React from 'react';
import { Link } from 'react-router-dom';
import personal2 from '../images/personal2.png';
import business from '../images/business.jpg';
import news from '../images/news.png';
import './more.css';

const More: React.FC = () => {
  return (
    <div className="morecontainer">
      <div className="more-content">
        <h2 className="header">News & Updates</h2>
        <img className="image1" src={news} alt="News and Updates" />
        <h4 className="headers">COVID-19 NOTICE</h4>
        <p className="content">
          Our Banking Company Lobby is OPEN. You may continue to utilize our drive-thru, online banking, mobile check deposit, and ATM for all your banking needs. You may still make an appointment by calling 417-667-4550.
        </p>
      </div>
      <div>
        <h2 className="header">Personal Banking</h2>
        <img className="image" src={personal2} alt="Personal Banking" />
        <p className="content">
          We provide a comprehensive line of personal banking products designed to help you better manage all your financial needs. Please click below for more information!
        </p>
        <Link to="/personal">
          <button className="btns">More</button>
        </Link>
      </div>
      <div>
        <h2 className="header">Business Banking</h2>
        <img className="images" src={business} alt="Business Banking" />
        <p className="content">
          We are dedicated to meeting your needs with our wide range of financial products and services for your business. Please click below for more information!
        </p>
        <Link to="/business">
          <button className="btns">More</button>
        </Link>
      </div>
    </div>
  );
};

export default More;
