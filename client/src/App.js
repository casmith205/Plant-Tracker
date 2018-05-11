import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
// import RegistrationPage from './pages/RegistrationPage';
// import ProfilePage from './pages/ProfilePage';
// import IndoorPage from './pages/IndoorPage';
// import OutdoorPage from './pages/OutdoorPage';
// import GraveyardPage from'./pages/GraveyardPage';

import './App.css';

class App extends Component {
  render() {
    return (
      // don't need anything outside of the routes
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* <Route exact path="/registration" component={RegistrationPage} /> */}
          {/* <Route exact path="/profile" component={ProfilePage} /> */}
          {/* <Route exact path="/outdoorplants" component={GraveyardPage} />
          <Route exact path="/indoorplants" component={IndoorPage} /> */}
          {/* <Route exact path="/profile" component={ProfilePage} /> */}
          {/* <Route exact path="/registration" component={RegistrationPage} /> */}
          {/* determines what component is routed to.
          below route (NoMatch) would be 404*/}
          {/* <Route component={NoMatch} />  */}
        </Switch> 
      </Router>

    );
  };
}

export default App;
