import React from "react";
import reactDom from "react-dom";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copywrite: {currentYear}</p>
    </footer>
  );
}

export default Footer;
