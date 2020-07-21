import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "fdweb/fluent-icons.css";
import "fdweb/fluent.css";
import "./App.css";
import AppView from './components/AppViewComp';
import Login from './components/LoginComp';
import Signup from './components/SignupComp';
import ChatWindow from "./components/ChatWindowComp";
import Messaging from "./components/MessagingComp";

const App = () =>{

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/app" component={AppView} />
          <Route path="/messaging" component={Messaging} />
          <Route path="/chatwindow" component={ChatWindow} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Fragment>
  );  
}

export default App;
