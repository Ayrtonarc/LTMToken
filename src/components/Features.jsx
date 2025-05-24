import React from "react";
import "./Features.css";

const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <h2>Ventajas de LTM Crypto</h2>
      <div className="features-list">
        <div className="feature">
          <h3>Estabilidad</h3>
          <p>Inspirada en el Euro, busca mantener un valor estable y predecible.</p>
        </div>
        <div className="feature">
          <h3>Accesibilidad</h3>
          <p>Fácil de usar y transferir en toda Latinoamérica.</p>
        </div>
        <div className="feature">
          <h3>Innovación</h3>
          <p>Solución moderna para los retos económicos de la región.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
