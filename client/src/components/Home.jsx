import React, { Component } from "react";

import Logout from "./Logout.jsx";
import CreateCohort from "./cohort/CreateCohort.jsx";
import SelectCohort from "./cohort/SelectCohort.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreateCohort />
        <SelectCohort />
        <Logout />
      </div>
    );
  }
}

export default Home;
