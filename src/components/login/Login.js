import React from 'react';
import styles from './Login.module.css';
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    try {
      await dispatch(login({ email, password }));
      navigate('/');
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  return (
    <section className={styles.login}>
      <Form onSubmit={handleSubmit}>
        <h3>Se connecter</h3>
        <br />
        <FormLabel>Email</FormLabel>
        <FormControl
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <FormLabel>Mot de passe</FormLabel>
        <FormControl
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <br />
        <Button type="submit" block>
          Connexion
        </Button>
      </Form>
    </section>
  );
};

export default Login;