import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function LandingPage() {

  function getAdminPermissions() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'gerente', password: 'gerente' })
    };
    fetch('https://joeyjohnjo-senhas.herokuapp.com/login', requestOptions)
      .then(response => response.text())
      .then(data => console.log(data));
  }

  return (
    <div className="base">
      <h1>Gestor de Senhas por JoeyJohnJo</h1>
      <div className="buttonContainer">
        <Link to="/gerente">
          <div className="button admin" onClick={getAdminPermissions}>
            Gerente
          </div>
        </Link>
        <Link to="/cliente">
          <div className="button client">
            Cliente
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;