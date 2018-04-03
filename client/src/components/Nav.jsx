import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }

  render() {
    return (
      <div>
        <input />
        <button>Log In</button>
      </div>
    );
  }
}

export default Login;
