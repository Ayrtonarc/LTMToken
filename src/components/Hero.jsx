import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>LTM Crypto</h1>
          <p>El token digital estable que conecta Latinoamérica con el mundo.<br />
            <span className="network-info">Funciona sobre la red de Solana</span>
          </p>
          <a href="#whitepaper" className="cta-btn">Leer Whitepaper</a>
        </div>
        <div className="hero-img">
          <img src="/assets/latam-token-hero.svg" alt="LTM Crypto Latinoamérica" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
