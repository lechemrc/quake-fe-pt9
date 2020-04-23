import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from './components/Nav'
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>Quake!</h1>
     <Router>

        <Nav/>
       <Route exact path = '/register' component ={Register}/>
       <Route exact path = '/login' component ={Login}/>
       <Route exact pate = '/contact' component ={Contact}/>

     </Router>
    </div>
  );
}

export default App;
