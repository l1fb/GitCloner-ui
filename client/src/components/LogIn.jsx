import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  verify() {}

  render() {
    return (
      <Link to="/landing">
        <button>Log In </button>
      </Link>
    );
  }
}

export default Login;
