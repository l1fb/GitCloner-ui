import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/home">
        <button>Back</button>
      </Link>
    );
  }
}

export default BackButton;
