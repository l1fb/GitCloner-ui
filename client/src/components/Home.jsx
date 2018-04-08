import React, { Component } from "react";

import Logout from "./Logout.jsx";
import CreateCohortButton from "./buttons/CreateCohortButton.jsx";
import SelectCohortButton from "./buttons/SelectCohortButton.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreateCohortButton />
        <SelectCohortButton />
        <Logout />
      </div>
    );
  }
}

export default Home;
