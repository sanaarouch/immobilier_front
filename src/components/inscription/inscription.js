@@ .. @@
 import React, { useState } from 'react';
-import styles from './inscription.module.css';
+import styles from './inscription.module.css';
 import { Button, Form, FormControl, FormLabel, Alert } from "react-bootstrap";
 import { useDispatch } from 'react-redux';
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
-      <Form onSubmit={handleSubmit}>
+      <Form onSubmit={handleSubmit} className={styles.inscriptionForm}>
         <h3>S'inscrire</h3>
         
         {error && <Alert variant="danger">{error}</Alert>}
         
-        <FormLabel>Nom</FormLabel>
-        <FormControl
-          type="text"
-          name="name"
-          value={formData.name}
-          onChange={handleChange}
-          required
-        />
-        
-        <FormLabel>Email</FormLabel>
-        <FormControl
-          type="email"
-          name="email"
-          value={formData.email}
-          onChange={handleChange}
-          required
-        />
-        
-        <FormLabel>Mot de passe</FormLabel>
-        <FormControl
-          type="password"
-          name="password"
-          value={formData.password}
-          onChange={handleChange}
-          required
-        />
-        
-        <FormLabel>Confirmer le mot de passe</FormLabel>
-        <FormControl
-          type="password"
-          name="confirmPassword"
-          value={formData.confirmPassword}
-          onChange={handleChange}
-          required
-        />
-        
-        <Button type="submit" variant="primary" className="w-100 mt-3">
+        <div className={styles.formGroup}>
+          <FormLabel>Nom</FormLabel>
+          <FormControl
+            type="text"
+            name="name"
+            value={formData.name}
+            onChange={handleChange}
+            required
+          />
+        </div>
+        
+        <div className={styles.formGroup}>
+          <FormLabel>Email</FormLabel>
+          <FormControl
+            type="email"
+            name="email"
+            value={formData.email}
+            onChange={handleChange}
+            required
+          />
+        </div>
+        
+        <div className={styles.formGroup}>
+          <FormLabel>Mot de passe</FormLabel>
+          <FormControl
+            type="password"
+            name="password"
+            value={formData.password}
+            onChange={handleChange}
+            required
+          />
+        </div>
+        
+        <div className={styles.formGroup}>
+          <FormLabel>Confirmer le mot de passe</FormLabel>
+          <FormControl
+            type="password"
+            name="confirmPassword"
+            value={formData.confirmPassword}
+            onChange={handleChange}
+            required
+          />
+        </div>
+        
+        <Button type="submit" variant="primary" className={styles.submitButton}>
           S'inscrire
         </Button>
       </Form>