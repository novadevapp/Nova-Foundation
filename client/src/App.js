import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Land} from './Component/Pages';

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = '/' component = {Land} exact />
          <Route render = {() => <div>Not Found</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
