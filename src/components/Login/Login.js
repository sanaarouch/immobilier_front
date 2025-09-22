@@ .. @@
 import React from 'react';
 import styles from './Login.module.css';
 import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
-import api from '../../api/api';
+import { useDispatch } from 'react-redux';
+import { login } from '../../store/actions/authActions';
+import { useNavigate } from 'react-router-dom';
 
 
-export class Login extends React.Component {
-    state = {
-      email: "",
-      password: ""
-    };
-    
-    send = async () => {
-        const { email, password } = this.state;
-        if (!email || email.length === 0) {
-        return;
-        }
-        if (!password || password.length === 0) {
-            return;
-        }
-        try {
-            const { data } = await api.login(email, password);
-            localStorage.setItem("token", data.token);
-            window.history.go(1);
-        } catch (error) {
-            console.error(error);
-        }
-    };
-    handleChange =(name) => (event) => {
-        this.setState({
-            [name]: event.target.value
-        });
-    };
-    render() {
-        const { email, password } = this.state;
-        return (
-            <section className={styles.login}>
-            <Form>
-                <h3> Se connecter </h3>
-                <br />
-                <FormLabel>Email</FormLabel>
-                <FormControl
-                autoFocus
-                type="email"
-                value={email}
-                onChange={this.handleChange("email")}
-                />
-            </Form>
-            <br />
-            <br />
-            <br />
-            <br />
-            <br />
-            <Form controlId="password" >
-                <FormLabel>Mot de passe </FormLabel>
-                <FormControl
-                value={password}
-                onChange={this.handleChange("password")}
-                type="password"
-                />
-            </Form>
-            <br />
-            <br />
-            <br />
-            <Button onClick={this.send} block  type="submit">
-                Connexion
-            </Button>
-            </section>
-      );
-    }
-  }
-  export default Login;
+const Login = () => {
+  const [email, setEmail] = React.useState("");
+  const [password, setPassword] = React.useState("");
+  const dispatch = useDispatch();
+  const navigate = useNavigate();
+  
+  const handleSubmit = async (e) => {
+    e.preventDefault();
+    if (!email || !password) return;
+    
+    try {
+      await dispatch(login({ email, password }));
+      navigate('/');
+    } catch (error) {
+      console.error('Erreur de connexion:', error);
+    }
+  };
+
+  return (
+    <section className={styles.login}>
+      <Form onSubmit={handleSubmit}>
+        <h3>Se connecter</h3>
+        <br />
+        <FormLabel>Email</FormLabel>
+        <FormControl
+          autoFocus
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
+        <Button type="submit" block>
+          Connexion
+        </Button>
+      </Form>
+    </section>
+  );
+};
+
+export default Login;