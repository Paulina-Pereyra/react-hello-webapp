import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <div className="footer-social">
          <a href="https://www.instagram.com/cleopatra_uyy" className="social-icon" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Cleopatra. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
