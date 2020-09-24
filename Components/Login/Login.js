import React from 'react';
import styles from './Login.module.css';
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import api from '../../api/api';


export class Login extends React.Component {
    state = {
      email: "",
      password: ""
    };
    
    send = async () => {
        const { email, password } = this.state;
        if (!email || email.length === 0) {
        return;
        }
        if (!password || password.length === 0) {
            return;
        }
        try {
            const { data } = await api.login(email, password);
            localStorage.setItem("token", data.token);
            window.history.go(1);
        } catch (error) {
            console.error(error);
        }
    };
    handleChange =(name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    };
    render() {
        const { email, password } = this.state;
        return (
            <section className={styles.login}>
            <Form>
                <h3> Se connecter </h3>
                <br />
                <FormLabel>Email</FormLabel>
                <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={this.handleChange("email")}
                />
            </Form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Form controlId="password" >
                <FormLabel>Mot de passe </FormLabel>
                <FormControl
                value={password}
                onChange={this.handleChange("password")}
                type="password"
                />
            </Form>
            <br />
            <br />
            <br />
            <Button onClick={this.send} block  type="submit">
                Connexion
            </Button>
            </section>
      );
    }
  }
  export default Login;