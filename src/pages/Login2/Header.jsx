// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav">        
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <button className='btn-cadastre-se'> Cadastre-se</button>    
      </nav>
    </header>
  );
};

export default Header;