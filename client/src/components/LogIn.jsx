import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.verify = this.verify.bind(this);
    this.verifyOnEnter = this.verifyOnEnter.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  verify() {
    if (this.state.password === "hir") {
      this.props.history.push("/home");
    } else {
      alert("Invalid Password");
    }
  }

  verifyOnEnter(e) {
    if (e.key === "Enter" && this.state.password === "hir") {
      this.props.history.push("/home");
    } else if (e.key === "Enter" && this.state.password !== "hir") {
      alert("Invalid Passwprd");
    }
  }

  render() {
    return (
      <div>
        <input
          name="password"
          onChange={this.onChangeHandler}
          onKeyPress={this.verifyOnEnter}
        />
        <button onClick={this.verify}>Log In</button>
      </div>
    );
  }
}

export default Login;
