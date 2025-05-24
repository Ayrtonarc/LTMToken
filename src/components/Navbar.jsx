import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <a href="/" className="navbar-logo">LTM Crypto</a>
      <div className="navbar-links">
        <a href="#about">¿Qué es?</a>
        <a href="#features">Ventajas</a>
        <a href="#whitepaper">Whitepaper</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contacto</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
