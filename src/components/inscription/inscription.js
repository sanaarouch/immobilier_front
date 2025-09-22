import React, { useState } from 'react';
import styles from './inscription.module.css';
import { Button, Form, FormControl, FormLabel, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Inscription = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    try {
      await dispatch(register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      }));
      navigate('/');
    } catch (error) {
      setError('Erreur lors de l\'inscription');
      console.error('Erreur d\'inscription:', error);
    }
  };

  return (
    <section className={styles.inscription}>
      <Form onSubmit={handleSubmit} className={styles.inscriptionForm}>
        <h3>S'inscrire</h3>
        
        {error && <Alert variant="danger">{error}</Alert>}
        }
        
        <div className={styles.formGroup}>
          <FormLabel>Nom</FormLabel>
          <FormControl
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <FormLabel>Mot de passe</FormLabel>
          <FormControl
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <FormLabel>Confirmer le mot de passe</FormLabel>
          <FormControl
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          variant="primary" 
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Inscription...' : 'S\'inscrire'}
        </Button>
      </Form>
    </section>
  );
};

export default Inscription;