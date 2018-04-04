import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Link to={"/"}>
        <button>Log Out</button>
      </Link>
    );
  }
}

export default Logout;
