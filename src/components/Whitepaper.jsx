import React from "react";
import "./Whitepaper.css";

const Whitepaper = () => (
  <section className="whitepaper">
    <div className="container" id="whitepaper">
      <h2>🧾 Whitepaper - LTM Crypto</h2>
      <h3>📌 Resumen Ejecutivo</h3>
      <p>LTM Crypto es un token digital diseñado para convertirse en una herramienta de pagos eficiente, accesible y descentralizada para toda Latinoamérica. Aprovechando la velocidad y bajo costo de la red Solana, LTM busca ser el equivalente al euro latinoamericano en el ecosistema digital, promoviendo la inclusión financiera y la interoperabilidad regional.</p>
      <h3>🎯 Visión</h3>
      <p>Convertirnos en el medio de pago descentralizado líder en Latinoamérica, brindando a millones de usuarios acceso a transacciones rápidas, seguras y sin intermediarios.</p>
      <h3>🧩 Problemas que LTM resuelve</h3>
      <ul>
        <li>❌ Altos costos de transferencia bancaria y comisiones por remesas.</li>
        <li>❌ Inflación y volatilidad monetaria en monedas locales.</li>
        <li>❌ Exclusión financiera de personas no bancarizadas.</li>
        <li>❌ Falta de interoperabilidad de monedas entre países de LATAM.</li>
      </ul>
      <h3>✅ Solución: LTM Token</h3>
      <ul>
        <li>🚀 Red Solana: hasta 65,000 transacciones por segundo con tarifas de fracción de centavo.</li>
        <li>💼 Transacciones entre personas y comercios en segundos.</li>
        <li>📱 Integración en apps móviles, wallets y pagos QR.</li>
        <li>💳 Posibilidad futura de tarjetas vinculadas a LTM.</li>
      </ul>
      <h3>⚙️ Detalles Técnicos</h3>
      <table className="whitepaper-table">
        <tbody>
          <tr><td>Propiedad</td><td>Valor</td></tr>
          <tr><td>Nombre del token</td><td>LTM Crypto</td></tr>
          <tr><td>Símbolo</td><td>LTM</td></tr>
          <tr><td>Red</td><td>Solana</td></tr>
          <tr><td>Tipo</td><td>SPL Token</td></tr>
          <tr><td>Total supply inicial</td><td>1,000,000 LTM</td></tr>
          <tr><td>Decimal places</td><td>6</td></tr>
          <tr><td>Contrato token</td><td>(por definir tras despliegue)</td></tr>
        </tbody>
      </table>
      <h3>🧮 Tokenomics</h3>
      <table className="whitepaper-table">
        <thead>
          <tr><th>Uso</th><th>Porcentaje</th><th>LTM asignados</th></tr>
        </thead>
        <tbody>
          <tr><td>Circulación inicial</td><td>40%</td><td>400,000</td></tr>
          <tr><td>Fondo de desarrollo</td><td>20%</td><td>200,000</td></tr>
          <tr><td>Marketing y adopción</td><td>15%</td><td>150,000</td></tr>
          <tr><td>Recompensas y staking</td><td>15%</td><td>150,000</td></tr>
          <tr><td>Liquidez en exchanges</td><td>10%</td><td>100,000</td></tr>
        </tbody>
      </table>
      <h3>🛣️ Roadmap</h3>
      <table className="whitepaper-table">
        <thead>
          <tr><th>Fase</th><th>Objetivos clave</th></tr>
        </thead>
        <tbody>
          <tr><td>Q2 2025</td><td>Lanzamiento del token LTM en Solana (devnet y mainnet), landing page, whitepaper</td></tr>
          <tr><td>Q3 2025</td><td>Listado en Raydium/Jupiter, alianzas con wallets, pilotos en apps de pago LATAM</td></tr>
          <tr><td>Q4 2025</td><td>Programa de embajadores, lanzamiento en CoinGecko, creación de comunidad</td></tr>
          <tr><td>Q1 2026</td><td>Integración con plataformas e-commerce y primeras pruebas con comercios físicos</td></tr>
        </tbody>
      </table>
      <h3>📱 Casos de uso reales</h3>
      <ul>
        <li>💵 Enviar remesas entre México, Colombia, Perú y Argentina.</li>
        <li>🛒 Comprar productos en tiendas físicas o digitales.</li>
        <li>🧾 Pagos en línea sin necesidad de bancos.</li>
        <li>👷 Recompensas en microtareas o trabajo freelance.</li>
      </ul>
      <h3>🔐 Seguridad y confianza</h3>
      <ul>
        <li>Transparencia total en la emisión del token.</li>
        <li>Contrato auditado por terceros (previsto en roadmap).</li>
        <li>Comunidad activa y código abierto en GitHub.</li>
      </ul>
      <h3>👥 Equipo y comunidad</h3>
      <p>LTM es un proyecto lanzado desde México, con enfoque regional y proyección global. Nos apoyamos en una comunidad de desarrolladores, usuarios y visionarios comprometidos con el crecimiento de la descentralización en Latinoamérica.</p>
      <h3>🌐 Sitio oficial</h3>
      <p>www.ltmcrypto.com (en desarrollo)</p>
      <h3>¿Qué sigue?</h3>
      <ul>
        <li>El contrato se desplegará en mainnet próximamente.</li>
        <li>Se abrirán las postulaciones para embajadores y testers.</li>
        <li>Se liberará la app móvil para pruebas.</li>
      </ul>
      <h3>📝 Notas legales</h3>
      <p>LTM no representa un instrumento financiero tradicional. El uso del token es voluntario y bajo responsabilidad del usuario. Este whitepaper no constituye asesoría financiera ni promesa de rendimientos.</p>
      <h3>❓ Preguntas Frecuentes (FAQ)</h3>
      <div className="whitepaper-faq">
        <strong>¿Qué es LTM Crypto?</strong>
        <p>Es un token digital estable, creado para facilitar pagos y transferencias rápidas, seguras y de bajo costo en Latinoamérica, aprovechando la red Solana.</p>
        <strong>¿Cómo puedo obtener LTM?</strong>
        <p>Próximamente estará disponible en exchanges y apps asociadas. Síguenos para enterarte del lanzamiento.</p>
        <strong>¿LTM es una stablecoin?</strong>
        <p>LTM busca mantener estabilidad y baja volatilidad, pero no está atado 1:1 a una moneda fiat. Su diseño prioriza la utilidad y la adopción regional.</p>
        <strong>¿Qué ventajas tiene sobre otras criptomonedas?</strong>
        <p>Costos mínimos, velocidad de transacción, enfoque en inclusión financiera y compatibilidad con apps y pagos QR en LATAM.</p>
        <strong>¿Es seguro usar LTM?</strong>
        <p>Sí, el contrato será auditado y el código será abierto. Además, la red Solana ofrece alta seguridad y rendimiento.</p>
        <strong>¿Dónde puedo consultar el contrato y el código?</strong>
        <p>El contrato y el repositorio de GitHub serán publicados tras el despliegue en mainnet.</p>
        <strong>¿Qué es una criptomoneda?</strong>
        <p>Una criptomoneda es un activo digital que utiliza criptografía avanzada para asegurar las transacciones y controlar la creación de nuevas unidades. Opera sobre una red blockchain descentralizada, lo que significa que no depende de bancos ni gobiernos, permitiendo transferencias globales, rápidas y seguras entre usuarios.</p>
        <strong>¿Qué es una stablecoin?</strong>
        <p>Una stablecoin es una criptomoneda diseñada para mantener un valor estable en el tiempo, generalmente respaldada por activos como monedas fiduciarias (USD, EUR) o materias primas. Esto reduce la volatilidad típica de otras criptomonedas y la hace ideal para pagos, remesas y ahorro digital.</p>
        <strong>¿Qué es la red Solana?</strong>
        <p>Solana es una blockchain de alto rendimiento que permite procesar miles de transacciones por segundo con tarifas extremadamente bajas. Es reconocida por su velocidad, escalabilidad y por ser una de las redes preferidas para aplicaciones financieras, pagos y proyectos innovadores en el mundo cripto.</p>
        <strong>¿Qué es un whitepaper?</strong>
        <p>Un whitepaper es un documento técnico y estratégico que explica en detalle el propósito, funcionamiento, tecnología y proyección de un proyecto cripto o blockchain. Es la referencia principal para entender la visión, los objetivos y la propuesta de valor de un token o plataforma.</p>
        <strong>¿Qué es un token SPL?</strong>
        <p>Un token SPL es el estándar de tokens en la red Solana, similar a los tokens ERC-20 en Ethereum. Permite crear y gestionar activos digitales (como LTM Crypto) que pueden transferirse, intercambiarse y usarse en aplicaciones dentro del ecosistema Solana.</p>
        <strong>¿Qué es la descentralización?</strong>
        <p>La descentralización es un principio fundamental de las criptomonedas y blockchain. Significa que el control y la validación de las transacciones no dependen de una sola entidad, sino de una red distribuida de participantes. Esto aumenta la seguridad, la transparencia y reduce el riesgo de censura o manipulación.</p>
      </div>
    </div>
  </section>
);

export default Whitepaper;
