import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from './pages/LoginPage';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Route path="/" component={LoginPage} />
    </div>
  </Router>;

export default App;
