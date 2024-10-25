import React from 'react';
import './SolicitudCard.css';

function SolicitudCard({ solicitud }) {
  const estadoClase = solicitud.estado.toLowerCase().replace(/\s+/g, '_');

  return (
    <div className='container'>
        <div className={`solicitud-card ${estadoClase}`}>
        <div className="card-header">
            <h3><i className="fas fa-envelope"></i> Solicitud</h3>
            <span className={`estado ${estadoClase}`}>{solicitud.estado}</span>
        </div>
        <p><strong>Nombre:</strong> {solicitud.nombre}</p>
        <p><strong>Correo:</strong> {solicitud.correo}</p>
        <p><strong>Personas a asistir:</strong> {solicitud.personas}</p>
        <p><strong>Propósito de la reunión:</strong> {solicitud.proposito}</p>
        <div className="card-footer">
            <span><strong>Hora de Inicio:</strong> {solicitud.horaInicio}</span>
            <span><strong>Hora de Finalización:</strong> {solicitud.horaFin}</span>
        </div>
        </div>
    </div>
  );
}

export default SolicitudCard;
