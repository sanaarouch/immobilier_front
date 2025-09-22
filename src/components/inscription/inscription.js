import React from 'react';
import styles from './inscription.module.css';
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Inscription = () => {
  const [nom, setNom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCpassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom || !email || !password || password !== cpassword) {
      return;
    }
    
    try {
      await dispatch(register({ nom, email, password }));
      navigate('/');
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
    }
  };

  return (
    <section className={styles.inscription}>
      <Form onSubmit={handleSubmit}>
        <h3>Créer un compte</h3>
        <br />
        <FormLabel>Nom</FormLabel>
        <FormControl
          autoFocus
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <br />
        <FormLabel>Email</FormLabel>
        <FormControl
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
        <FormLabel>Confirmation mot de passe</FormLabel>
        <FormControl
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          type="password"
          required
        />
        <br />
        <div className={styles.check}>
          <p>En soumettant ce formulaire, j'accepte que les informations saisies dans ce formulaire<br /> soient utilisées, exploitées, traitées pour permettre de me recontacter, dans le cadre<br />
          de la relation commerciale qui découle de cette demande d'informations.</p> 
        </div>
        <Button type="submit" block>
          Inscription
        </Button>
      </Form>
    </section>
  );
};

export default Inscription;