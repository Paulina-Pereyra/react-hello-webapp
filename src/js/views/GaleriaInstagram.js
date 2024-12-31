import React from "react";
import "../../styles/galeriaInstagram.css";
import gloss from "../../img/gloss.jpg";
import contorno from "../../img/contorno.jpg";
import corrector from "../../img/corrector.jpg";
import sombras from "../../img/sombras.jpg";
import rubor from "../../img/rubor.jpg";
import iluminador from "../../img/iluminador.jpg";

export const GaleriaInstagram = () => {
  const images = [gloss, contorno, corrector, sombras, rubor, iluminador]; // Array de imágenes importadas
  const instagramURL = "https://www.instagram.com/cleopatra_uyy"; // URL de tu Instagram

  return (
    <div className="galeria-instagram">
      <h2>Galería de Instagram</h2>
      <div className="galeria-mosaico">
        {images.map((image, index) => (
          <div className="galeria-item" key={index}>
            <a href={instagramURL} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={`Imagen ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
      <div className="instagram-button-container">
        <a href={instagramURL} target="_blank" rel="noopener noreferrer">
          <button className="instagram-button">Síguenos en Instagram</button>
        </a>
      </div>
    </div>
  );
};
