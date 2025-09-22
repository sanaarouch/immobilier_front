@@ .. @@
 import React from 'react';
 import styles from './inscription.module.css';
 import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
-import api from '../../api/api';
-import { Redirect } from "react-router-dom";
+import { useDispatch } from 'react-redux';
+import { register } from '../../store/actions/authActions';
+import { useNavigate } from 'react-router-dom';
 
 
-export class inscription extends React.Component {
-  state = {
-    nom:"",
-    email: "",
-    password: "",
-    cpassword: "",
-    goodInscription: false
-  };
-  
-  send = async () => {
-    const { nom, email, password, cpassword } = this.state;
-      if (!nom || nom.length === 0) {
-      return;
-      }
-      if (!email || email.length === 0){ 
-      return;
-      }
-      if (!password || password.length === 0 || password !== cpassword) {
-      return;
-      }
-      try {
-          const { data } = await api.inscription({ nom, email, password });
-          localStorage.setItem("token", data.token);
-         this.setState({goodInscription:true})
-      } catch (error) {
-        console.error(error);
-      }
-  };
-  handleChange = (name) => (event) => {
-      this.setState({
-          [name]: event.target.value
-      });
-  };
+const Inscription = () => {
+  const [nom, setNom] = React.useState("");
+  const [email, setEmail] = React.useState("");
+  const [password, setPassword] = React.useState("");
+  const [cpassword, setCpassword] = React.useState("");
+  const dispatch = useDispatch();
+  const navigate = useNavigate();
+  
+  const handleSubmit = async (e) => {
+    e.preventDefault();
+    if (!nom || !email || !password || password !== cpassword) {
+      return;
+    }
+    
+    try {
+      await dispatch(register({ nom, email, password }));
+      navigate('/');
+    } catch (error) {
+      console.error('Erreur d\'inscription:', error);
+    }
+  };

-  render() {
-      const { nom, email, password, cpassword } = this.state;
-      if (this.state.goodInscription) {
-        return <Redirect to="/"/>
-      }
-        return (
-          <section className={styles.inscription}>
-                <Form controlId="email">
-                    <h3> Créer un compte </h3>
-                    <br />
-                    <FormLabel>Nom</FormLabel>
-                    <FormControl
-                        autoFocus
-                        type="nom"
-                        value={nom}
-                        onChange={this.handleChange("nom")}
-                    />
-                </Form>
-                <br />
-                <Form>
-                    <FormLabel>Email</FormLabel>
-                    <FormControl
-                        autoFocus
-                        type="email"
-                        value={email}
-                        onChange={this.handleChange("email")}
-                    />
-                </Form>
-                <br />
-                <Form>
-                    <FormLabel>Mot de passe </FormLabel>
-                    <FormControl
-                        value={password}
-                        onChange={this.handleChange("password")}
-                        type="password"
-                    />
-                </Form>
-                <br />
-                <Form>
-                    <FormLabel>Confirmation mot de passe</FormLabel>
-                    <FormControl
-                        value={cpassword}
-                        onChange={this.handleChange("cpassword")}
-                        type="password"
-                    />
-                </Form>
-                <br />
-                <div className={styles.check}>
-                <Form size="xs"controlId="formBasicCheckbox"> 
-                <p>En soumettant ce formulaire, j'accepte que les informations saisies dans ce formulaire<br /> soient utilisées, exploitées, traitées pour permettre de me recontacter, dans le cadre<br />
-                de la relation commerciale qui découle de cette demande d'informations.</p> 
-                </Form>
-                </div>
-                    <Button onClick={this.send} block type="submit">
-                    Inscription
-                    </Button>
-              
-          </section>
-    );
-  }
-}
-export default inscription;
+  return (
+    <section className={styles.inscription}>
+      <Form onSubmit={handleSubmit}>
+        <h3>Créer un compte</h3>
+        <br />
+        <FormLabel>Nom</FormLabel>
+        <FormControl
+          autoFocus
+          type="text"
+          value={nom}
+          onChange={(e) => setNom(e.target.value)}
+          required
+        />
+        <br />
+        <FormLabel>Email</FormLabel>
+        <FormControl
+          type="email"
+          value={email}
+          onChange={(e) => setEmail(e.target.value)}
+          required
+        />
+        <br />
+        <FormLabel>Mot de passe</FormLabel>
+        <FormControl
+          value={password}
+          onChange={(e) => setPassword(e.target.value)}
+          type="password"
+          required
+        />
+        <br />
+        <FormLabel>Confirmation mot de passe</FormLabel>
+        <FormControl
+          value={cpassword}
+          onChange={(e) => setCpassword(e.target.value)}
+          type="password"
+          required
+        />
+        <br />
+        <div className={styles.check}>
+          <p>En soumettant ce formulaire, j'accepte que les informations saisies dans ce formulaire<br /> soient utilisées, exploitées, traitées pour permettre de me recontacter, dans le cadre<br />
+          de la relation commerciale qui découle de cette demande d'informations.</p> 
+        </div>
+        <Button type="submit" block>
+          Inscription
+        </Button>
+      </Form>
+    </section>
+  );
+};
+
+export default Inscription;