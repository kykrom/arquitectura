import React from 'react';
import './Dropdown.css';

function Dropdown({ onChange }) {
  return (
    <div className="dropdown">
      <select onChange={onChange}>
        <option value="">Estados de la solicitudes</option>
        <option value="en proceso">En proceso</option>
        <option value="rechazada">Rechazada</option>
        <option value="reservada">Reservada</option>
      </select>
    </div>
  );
}

export default Dropdown;
