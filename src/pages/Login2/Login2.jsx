import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import { FaUser, FaLock, FaTimes } from "react-icons/fa";
import Header from "./Header.jsx";
import "./Login2.css";

const Login2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

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

  const _btnStyle = {
    width: "100%",
    height: "45px",
    border: "none",
    outline: "none",
    background: "rgb(18, 159, 108)",
    color: "white",
    fontSize: "1em",
    fontWeight: 500,
    cursor: "pointer",
    borderRadius: "6px",
    margin: "20px 0",
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
                value={data.userName}
                onChange={(e) => setData({ ...data, userName: e.target.value })}
                required
              />
              <FaUser className="icon" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-box">
              <span className="icon"></span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
              {showPassword ? (
                <div>cadeado aberto</div>
              ) : (
                <div>cadeado fechado</div>
              )}
              <FaLock className="icon" onClick={() => setShowPassword(showPassword ? false : true )} />
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

            <button type="submit" style={_btnStyle}>
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
