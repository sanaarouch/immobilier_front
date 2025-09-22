import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from '../store/store';
import Home from '../pages/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
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