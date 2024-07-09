import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        &copy; 2024 Job Portal. All rights reserved.
      </p>
      <div className="social-links">
        <a href="#" className="social-link">
          Facebook
        </a>
        <a href="#" className="social-link">
          Twitter
        </a>
        <a href="#" className="social-link">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
