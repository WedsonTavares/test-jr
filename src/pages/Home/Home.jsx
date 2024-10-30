import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        <img
          src="/src/assets/logo.png"
          alt="Logotipo"
          className="logo"
        />
        <h1>
          Completa, Acessível e Sem Complicações para famílias como a sua!
        </h1>
        <p>
          Completa, Acessível e Sem Complicações para famílias como a sua! Por
          apenas R$ 69,90 por mês, você e mais 7 dependentes têm acesso total à
          nossa rede de serviços de saúde de qualidade, garantindo que toda a
          sua família esteja protegida.
        </p>
        <button className="cta-button">Quero Assinar</button>
      </div>
      <div className="right-section">
        <img
          src="/src/assets/header.png"
          alt="Imagem de cabeçalho"
          className="header-image"
        />
      </div>
    </div>
  );
}

export default Home;