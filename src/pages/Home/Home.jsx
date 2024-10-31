// src/pages/Home/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Loading from "../../components/Loading";

function Home() {
  const navigate = useNavigate();

  const { username, isLoggedIn } = useSelector((state) => state.user);
  const [character, setCharacter] = useState(null);
  const [batata, setLoading] = useState(false);

  async function GetPersonsSw() {
    setLoading(true);
    try {
      axios.get("https://swapi.dev/api/people/1/").then((res) => setCharacter(res.data))    
      setTimeout(() => {

        setLoading(false);
      }, 3000)
   
    } catch (e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetPersonsSw();
  }, []);

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <Loading loading={batata} />
      <div className="left-section">
        <img src="/src/assets/logo.png" alt="Logotipo" className="logo" />
        <h1>
          Completa, Acessível e Sem Complicações para famílias como a sua!
        </h1>
        <p>
          Completa, Acessível e Sem Complicações para famílias como a sua! Por
          apenas R$ 69,90 por mês, você e mais 7 dependentes têm acesso total à
          nossa rede de serviços de saúde de qualidade, garantindo que toda a
          sua família esteja protegida.
        </p>
        {isLoggedIn ? (
          <p>Bem-vindo, {username}!</p>
        ) : (
          <button className="cta-button" onClick={handleButtonClick}>
            Quero Assinar
          </button>
        )}
        {character && (
          <p style={{ color: character.eye_color }}>
            Personagem: {character.url}
          </p>
        )}
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
