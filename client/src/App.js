import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "fdweb/fluent-icons.css";
import "fdweb/fluent.css";
import "./App.css";
import Messaging from "./components/MessagingComp";
import ChatWindow from "./components/ChatWindowComp"; 

const App = () =>{

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/messaging" component={Messaging} />
          <Route path="/chatwindow" component={ChatWindow} />
        </Switch>
      </Router>
    </Fragment>
  );  
}

export default App;
