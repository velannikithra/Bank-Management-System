import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="footer-content">
          <h3 className="header-link">Contact Us</h3>
          <p className="foot-link">Email: goldenbank@gmail.com</p>
          <p className="foot-link">Phone: #91 417-667-4550.</p>
          <p className="foot-link">No.13A, West Street, Chennai.</p>
        </div>
        <div className="footer-content">
          <h3 className="header-link">Quick Links</h3>
          <ul className="list">
            
              <Link className="foot-link" to="/">
                Home
              </Link>
           
              <Link className="foot-link" to="/about">
                About
              </Link>
           
              <Link className="foot-link" to="/personal">
                Personal Banking
              </Link>
            
              <Link className="foot-link" to="/business">
                Business Banking
              </Link>
            
          </ul>
        </div>
        <div className="footer-content">
          <h3 className="header-link">Follow Us</h3>
          <a
            className="foots-link"
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className="foots-link"
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="foots-link"
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="foots-link"
            href="http://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div>
        <p className="bottom-bar">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
