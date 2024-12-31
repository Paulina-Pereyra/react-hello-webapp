import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css"; 
import Destacada3 from "../../img/destacada3.jpg";
import { GaleriaInstagram } from "../views/GaleriaInstagram";


export const Home = () => {
	return (
	  <div className="home-container">
		{/* Sección de portada */}
		<div
		  className="home-portada"
		  style={{ backgroundImage: `url(${Destacada3})` }}
		>
		  <div className="home-portada-texto">
			<h1 className="home-titulo">Bienvenida a Cleopatra</h1>
			<p className="home-descripcion">Realza tu belleza con nuestro maquillaje.</p>
			<Link to="/productos" className="btn btn-primary">
			  Ver Productos
			</Link>
		  </div>
		</div>
  
		{/* Galería de Instagram */}
		<GaleriaInstagram />
	  </div>
	);
  };
  