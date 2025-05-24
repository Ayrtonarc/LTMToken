import React from "react";
import "./ComingSoon.css";

const ComingSoon = () => (
  <section className="coming-soon" id="coming-soon">
    <div className="container">
      <h2>¡Próximamente!</h2>
      <p>
        LTM Crypto estará disponible muy pronto. Únete a nuestra comunidad y sé parte del futuro financiero de Latinoamérica.
      </p>
      <form className="notify-form">
        <input type="email" placeholder="Tu email" required />
        <button type="submit">Notificarme</button>
      </form>
    </div>
  </section>
);

export default ComingSoon;
