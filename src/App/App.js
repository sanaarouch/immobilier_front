import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from '../store/store';
import Home from '../pages/home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PropertyDetail from '../pages/property/PropertyDetail';
import Login from '../components/login/Login';
import Inscription from '../components/inscription/inscription';
import Contact from '../pages/contact/Contact';
import ErrorBoundary from '../components/errorboundary/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Home />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={
                  <Container className="text-center mt-5">
                    <h2>Page non trouvée</h2>
                    <p>La page que vous cherchez n'existe pas.</p>
                  </Container>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;