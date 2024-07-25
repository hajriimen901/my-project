// App.js
import React from 'react';
import Navbar from './elements/navbar'; // Assurez-vous que le chemin vers Navbar est correct
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch> 
          <Route path='/' exact>
           
            
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;

