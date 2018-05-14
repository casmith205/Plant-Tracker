import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import IndoorPage from './pages/IndoorPage/IndoorPage';
import OutdoorPage from './pages/OutdoorPage/OutdoorPage';
import GraveyardPage from'./pages/GraveyardPage/GraveyardPage';
import NoMatch from './pages/404Page/NoMatch'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* // don't need anything outside of the routes */}
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/outdoorplants" component={OutdoorPage} />
            <Route exact path="/indoorplants" component={IndoorPage} />
            <Route exact path="/profile" component={ProfilePage} /> 
            <Route exact path="/graveyard" component={GraveyardPage} />
            {/* determines what component is routed to.
            below route (NoMatch) would be 404*/}
            <Route component={NoMatch} /> 
          </Switch> 
        </Router>
        <Footer />
      </div>
    );
  };
}

export default App;
