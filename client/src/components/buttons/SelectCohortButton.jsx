import React, { Component } from "react";
import { Link } from "react-router-dom";

class SelectCohort extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Link to="/selectCohort">
        <button>Select Cohort</button>
      </Link>
    );
  }
}

export default SelectCohort;
