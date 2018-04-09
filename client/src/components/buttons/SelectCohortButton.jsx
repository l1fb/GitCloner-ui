import React, { Component } from "react";
import { Link } from "react-router-dom";

class SelectCohort extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button>
        <Link to="/selectCohort">Select Cohort</Link>
      </button>
    );
  }
}

export default SelectCohort;
