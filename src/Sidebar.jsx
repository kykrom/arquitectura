import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img className='image' src="\alcaldia.png" alt="Alcaldía de Medellín" />
      </div>
      <button className="menu-button">Solicitudes</button>
      <p className='par'>Así se ve sin seleccionar</p>
    </div>
  );
}

export default Sidebar;
