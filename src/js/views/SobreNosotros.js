import React from 'react';
import "../../styles/sobreNosotros.css";
import logoCleopatra from "../../img/logocleopatra.png"; // Si deseas agregar el logo en la vista
import fondo2 from "../../img/fondo2.jpg";


const SobreNosotros = () => {
  return (
    <div
      className="sobre-nosotros-container"
      style={{
        backgroundImage: `url(${fondo2})`, // Asignación de la imagen de fondo importada
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="sobre-nosotros-header">
        <img src={logoCleopatra} alt="Cleopatra Logo" className="sobre-nosotros-logo" />
       
      </div>

      <div className="sobre-nosotros-contenido">
        <section className="sobre-nosotros-historia">
          <h2>Mi Historia</h2>
          <p>
            Soy Paulina, la fundadora de Cleopatra. Desde joven, siempre me fascinó el mundo del maquillaje,
            cómo puede transformar no solo la apariencia, sino también la confianza de una persona. Mi pasión por
            los cosméticos me llevó a crear este emprendimiento, con la misión de ofrecer productos de calidad
            accesibles para todas las mujeres.
          </p>
        </section>

        <section className="sobre-nosotros-mision">
          <h2>Misión</h2>
          <p>
            En Cleopatra, mi misión es brindar productos de maquillaje que no solo resalten la belleza externa,
            sino que también ayuden a las personas a sentirse más seguras y empoderadas. Cada producto que ofrezco
            está pensado para ser accesible, duradero y fácil de usar, porque creo que la belleza debe ser sencilla
            y accesible para todos.
          </p>
        </section>

        <section className="sobre-nosotros-vision">
          <h2>Visión</h2>
          <p>
            Mi visión es convertir a Cleopatra en una marca que inspire confianza y autenticidad, ayudando a
            todas las personas a sentirse cómodas con su propio estilo. Quiero seguir creciendo, ofreciendo
            productos innovadores y asegurándome de que cada cliente se sienta especial.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SobreNosotros;