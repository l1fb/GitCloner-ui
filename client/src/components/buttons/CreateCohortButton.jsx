import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateCohort extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/createCohort">
        <button>Register New Cohort</button>
      </Link>
    );
  }
}

export default CreateCohort;
