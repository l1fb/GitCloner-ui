import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}
