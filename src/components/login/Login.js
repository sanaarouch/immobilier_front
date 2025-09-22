import React, { useState } from 'react';
import styles from './Login.module.css';
import { Button, Form, FormControl, FormLabel, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state.auth);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    
    try {
      await dispatch(login({ email, password }));
      navigate('/');
    } catch (error) {
      console.error('Erreur de connexion:', error);
      setError(error.response?.data?.message || "Email ou mot de passe incorrect");
    }
  };

  return (
    <section className={styles.login}>
      <Form onSubmit={handleSubmit} className={styles.loginForm}>
        <h3>Se connecter</h3>
        
        {error && <Alert variant="danger">{error}</Alert>}
        }
        
        <div className={styles.formGroup}>
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <FormLabel>Mot de passe</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>
        <Button 
          type="submit" 
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Connexion...' : 'Connexion'}
        </Button>
      </Form>
    </section>
  );
};

export default Login;