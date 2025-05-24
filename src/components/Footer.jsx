import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} LTM Crypto. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
