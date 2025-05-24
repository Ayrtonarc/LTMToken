import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <a href="#hero" className="navbar-logo">LTM Crypto</a>
      <ul className="navbar-links">
        <li><a href="#about">¿Qué es?</a></li>
        <li><a href="#features">Ventajas</a></li>
        <li><a href="#whitepaper">Whitepaper</a></li>
        <li><a href="#coming-soon">Próximamente</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
