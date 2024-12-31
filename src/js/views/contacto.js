import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import '../../styles/contacto.css';
import fondo2 from "../../img/fondo2.jpg"


export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura EmailJS
    const serviceID = '130222'; // Reemplaza con tu ID de servicio
    const templateID = 'template_2yk8z2i'; // Reemplaza con tu ID de plantilla
    const publicKey = 'bCz8F8EokswAdzHEM'; // Reemplaza con tu clave pública

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
        alert('¡Mensaje enviado con éxito!');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un problema al enviar tu mensaje.');
      });
  };

  return (
 
      <div
        className="contacto-container"
        style={{
          backgroundImage: `url(${fondo2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <div className="contacto-header">
        <h1>Contacto</h1>
        <p>¡Nos encantaría saber de ti! Completa el formulario y nos pondremos en contacto.</p>
      </div>

      <div className="contacto-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </div>

    </div>
  );
};
