import React, { useState } from 'react';
import SolicitudCard from './SolicitudCard';
import Dropdown from './Dropdown';
import './MainContent.css';

function MainContent() {
  const [filtro, setFiltro] = useState('');
  const solicitudes = [
    { nombre: 'Sergio', estado: 'En proceso', correo: 'sergio_mail@gmail.com', fecha: '10 de Octubre', hora: '9:30 AM' },
    { nombre: 'Natalia', estado: 'En proceso', correo: 'natalia_mail@gmail.com', fecha: '10 de Octubre', hora: '9:30 AM' },
    { nombre: 'Carlos', estado: 'En proceso', correo: 'carlos_mail@gmail.com', fecha: '10 de Octubre', hora: '9:30 AM' },
    { nombre: 'María', estado: 'Rechazada', correo: 'maria_mail@gmail.com', fecha: '10 de Octubre', hora: '9:30 AM' },
    { nombre: 'Andrés', estado: 'Rechazada', correo: 'andres_mail@gmail.com', fecha: '10 de Octubre', hora: '9:30 AM' },
    { nombre: 'Luisa', estado: 'Reservada', correo: 'luisa_mail@gmail.com', fecha: '10 de Octubre', hora: '9:30 AM' }
  ];

  const handleFilterChange = (e) => {
    setFiltro(e.target.value);
  };

  // Filtrar solicitudes según el estado seleccionado
  const solicitudesFiltradas = filtro
    ? solicitudes.filter((solicitud) => solicitud.estado.toLowerCase() === filtro)
    : solicitudes;

  return (
    <div className="main-content">
        <div className='container-text'>
            <div className='container-soli'>
                <h1>Solicitudes</h1>
                <p className='p2'>Solicitudes de reserva para salones</p>
            </div>
            <button className="create-request-btn">Crear una solicitud</button>
        </div>
        <hr className='linea'></hr>
        <div className="filter-bar">
            <input type="text" placeholder="Buscar..." />
            <Dropdown onChange={handleFilterChange} />
        </div>
        <div className="solicitudes-grid">
            {solicitudesFiltradas.map((solicitud, index) => (
            <SolicitudCard key={index} solicitud={solicitud} />
            ))}
        </div>
    </div>
  );
}

export default MainContent;
