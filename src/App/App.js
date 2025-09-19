import React, { useState, useEffect } from 'react';
import './App.css';
import Home from '../Components/Home/home';
import Header from '../Components/Header/header';
import House  from '../Components/House/House';
import Order from '../Components/Order/Order';
import Users from '../Components/Users/Users';
import Login  from '../Components/Login/Login';
import Inscription from '../Components/Inscription/inscription';
import Englobant from '../HOC/Englobant';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from '../Components/Footer/footerPage';
import Dashboard from '../Components/Dashboard/dashboard';
import Presentation from '../Components/Home/presentation.js';
import Coordonnees from '../Components/Home/coordonnees.js';
import PrivateRoute from '../Components/PrivateRoute';
import yelp from '../api/yelp';

function App() {
  const [ data, setData ] = useState([]);

  useEffect ( () => {
      async function getData() {
        const result = await yelp.get();
        setData(result.data);
      }
    getData()  
  }, []);

  console.log(data);

  return (
    <div>
      <Router>
        <Englobant>
              <Header />
                  <Switch>
                       <Route path="/" exact>
                        <Home />
                        </Route> 
                        <Route path="/house" exact>
                        <House />
                        </Route>
                        <Route path="/order" exact>
                        <Order />
                        </Route>
                        <Route path="/users" exact>
                        <Users />
                        </Route>
                        <Route path="/login">
                        <Login />
                        </Route>
                        <Route path="/inscription" exact>
                        <Inscription />
                        </Route>    
                        <PrivateRoute path="/dashboard">
                        <Dashboard/>
                      </PrivateRoute> 
                  </Switch>
        </Englobant>
      </Router>
      <Presentation/>
      <Coordonnees/>
      <Footer/>
    </div>
  );
}

export default App;
