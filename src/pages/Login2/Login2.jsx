import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import { FaUser, FaLock, FaTimes } from "react-icons/fa";
import Header from "./Header.jsx";
import "./Login2.css";

const Login2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login2-background");

    return () => {
      document.body.classList.remove("login2-background");
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username }));
    navigate("/home");
  };

  return (
    <>
    <Header />
    <div className="container-wraper"> 
      <div>
        <FaTimes className="icon-closed"></FaTimes>
      </div>
      <div className="form-box login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon"></span>

            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="input-box">
            <span className="icon"></span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
            <label htmlFor="password">Senha do usuário</label>
          </div>

          <div className="lembrar-me">
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>
            <a href="#" className="link">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="btn">
            Acessar
          </button>

          <div className="login-register">
            <p>
              Não tem uma Conta?{" "}
              <a href="#" className="register-link">
                Registre-se aqui.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login2;
