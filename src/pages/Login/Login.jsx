import { FaUser, FaLock } from "react-icons/fa";

import{useState} from 'react';

import './Login.css';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados: " + username + " " + password);

        console.log("teste", username, password);

        console.log("Envio")
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
            <h1>Acesse o Sistema</h1>
          <input className="input-field" type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} required/>
          <FaUser className="icon"/>
        </div>

        <div>
          <input className="input-field" type="password" placeholder="Senha do usuário" onChange={(e) => setPassword(e.target.value)} required/>
          <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <input type="checkbox" />
            <label>Lembrar-me</label>
            <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Acessar</button>

        <div className="signup-link">
            <p>Não tem uma Conta? <a href="#">Registre-se</a>
            </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
