import React from "react";
import "../../styles/dondeEstamos.css";

const DondeEstamos = () => {
  return (
    <>
      <h1 className="donde-estamos-titulo">¿Dónde Estamos?</h1>

      <div className="donde-estamos-info">
        <section className="donde-estamos-ubicacion">
          <h2>Ubicación</h2>
          <p>
            Nos encontramos en la ciudad de Salto, Uruguay. Realizamos envíos a todo el país.
          </p>
        </section>
      </div>

      <div className="donde-estamos-mapa">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54493.62955705559!2d-57.97988722358562!3d-31.39064836370107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95addd27e22982a9%3A0x68fc0fac8ca73bc7!2s50000%20Salto%2C%20Departamento%20de%20Salto!5e0!3m2!1ses-419!2suy!4v1735485638434!5m2!1ses-419!2suy"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default DondeEstamos;
