import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>
          <Link to="/home">Back</Link>
        </button>
      </div>
    );
  }
}

export default BackButton;
