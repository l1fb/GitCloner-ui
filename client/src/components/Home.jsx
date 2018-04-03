import React, { Component } from "react";

import Logout from "./Logout.jsx";

class Home extends Component {
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

export default Home;
