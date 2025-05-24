import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="container">
      <h1>LTM Crypto</h1>
      <p>El token que aspira a ser el Euro de Latinoamérica<br />
      <span className="network-info">Funciona sobre la red de Solana</span></p>
    </div>
  </header>
);

export default Header;
