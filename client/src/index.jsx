import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import app from "./app.jsx";

const App = () => (
  <BrowserRouter>
    <app />
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
