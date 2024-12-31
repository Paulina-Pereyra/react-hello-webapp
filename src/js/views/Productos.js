import React from 'react';
import "../../styles/productos.css";
import Delineador from "../../img/delineador.jpg";
import Rubor from "../../img/rubor.jpg";
import Corrector from "../../img/corrector.jpg";
import Sombras from "../../img/sombras.jpg";
import Contorno from "../../img/contorno.jpg";
import Gloss from "../../img/gloss.jpg";
import Labial from "../../img/labial.jpg";
import Iluminador from "../../img/iluminador.jpg";
import fondo2 from "../../img/fondo2.jpg";

const productos = [
  {
    id: 1,
    nombre: 'Rubor Líquido',
    descripcion: 'Rubor líquido Ruby Rose, acabado brilloso con duracion +12 horas.',
    precio: '$220',
    imagen: Rubor,
  },
  {
    id: 2,
    nombre: 'Delineador Líquido',
    descripcion: 'Delineador de larga duración con acabado mate.',
    precio: '$180',
    imagen: Delineador,
  },
  {
    id: 3,
    nombre: 'Paleta de Sombras',
    descripcion: 'Paleta de sombras Ruby Rose. 15 tonos + corrector.',
    precio: '$290',
    imagen: Sombras, 
  },
  {
    id: 4,
    nombre: 'Contorno',
    descripcion: 'Contorno en crema, fácil difuminado.',
    precio: '$240',
    imagen: Contorno, 
  },
  {
    id: 5,
    nombre: 'Corrector',
    descripcion: 'Corrector líquido. Alta cobertura.',
    precio: '$120',
    imagen: Corrector, 
  },
  {
    id: 6,
    nombre: 'Iluminador',
    descripcion: 'Iluminador líquido. Larga duración.',
    precio: '$220',
    imagen: Iluminador, 
  },
  {
    id: 7,
    nombre: 'Labial',
    descripcion: 'Labial cremoso.',
    precio: '$240',
    imagen: Labial, 
  },
  {
    id: 8,
    nombre: 'Gloss',
    descripcion: 'Lip gloss. Varios tonos.',
    precio: '$210',
    imagen: Gloss, 
  },
];


const Productos = () => (
  <div
    className="productos-container"
    style={{
      backgroundImage: `url(${fondo2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}
  >
    <h1 className="productos-titulo">Explora Nuestra Colección</h1>
    <div className="productos-lista">
      {productos.map(({ id, nombre, descripcion, precio, imagen }) => (
        <div className="producto-card" key={id}>
          <div className="producto-imagen-container">
            <img src={imagen} alt={nombre} className="producto-imagen" />
          </div>
          <div className="producto-info">
            <h2 className="producto-nombre">{nombre}</h2>
            <p className="producto-descripcion">{descripcion}</p>
            <span className="producto-precio">{precio}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Productos;