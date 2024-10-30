
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/userSlice';
import { FaUser, FaLock } from "react-icons/fa";
import { Grid, Button, TextField, Checkbox, FormControlLabel, Link, Typography } from '@mui/material';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username }));
    navigate('/Home'); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h4" sx={{ mb: 2 }}>Acesse o Sistema</Typography>
          </Grid>
          <Grid item>
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <FaUser className="icon" />
          </Grid>
          <Grid item>
            <TextField
              label="Senha do usuário"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <FaLock className="icon" />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Checkbox />}
              label="Lembrar-me"
              sx={{ mb: 2 }}
            />
            <Link href="#" variant="body2">Esqueceu a senha?</Link>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }}>Acessar</Button>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Não tem uma Conta? <Link href="#">Registre-se</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;