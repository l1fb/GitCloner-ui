import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateCohort extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>
        <Link to="/createCohort">Register New Cohort</Link>
      </button>
    );
  }
}

export default CreateCohort;
