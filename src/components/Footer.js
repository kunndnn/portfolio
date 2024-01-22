// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Dev site . All rights reserved.</p>
    </footer>
  );
};

export default Footer;
