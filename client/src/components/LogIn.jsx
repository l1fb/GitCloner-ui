import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.verify = this.verify.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
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
      alert("Invalid Password!");
    }
  }

  render() {
    return (
      <div>
        <input name="password" onChange={this.onChangeHandler} />
        <button onClick={this.verify}>Log In </button>
      </div>
    );
  }
}

export default Login;
