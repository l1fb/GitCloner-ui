import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

import Login from "./components/LogIn.jsx";
import Home from "./components/Home.jsx";
import createCohort from "./components/cohort/CreateCohort.jsx";
import selectCohort from "./components/cohort/SelectCohort.jsx";
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
            <Route path="/selectCohort" component={selectCohort} />
            <Route path="/createCohort" component={createCohort} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
