import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

import Login from "./components/LogIn.jsx";
import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route path="/landing" component={Landing} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
