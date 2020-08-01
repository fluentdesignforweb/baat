import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "fdweb/fluent-icons.css";
import "fdweb/fluent.css";
import "./App.css";
import Messaging from "./components/MessagingComp";
import ChatWindow from "./components/ChatWindowComp"; 
import Signup from './components/LoginComp';

const App = () =>{

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/messaging" component={Messaging} />
          <Route path="/chatwindow" component={ChatWindow} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Fragment>
  );  
}

export default App;
