import React, { Component } from "react";

import Logout from "Logout.jsx";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Logout />
      </div>
    );
  }
}

export default Landing;
