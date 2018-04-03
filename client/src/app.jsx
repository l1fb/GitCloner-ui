import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

import Login from "./components/LogIn.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
