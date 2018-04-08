import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateCohort extends Component {
  constructor(props) {
    super(props);
    this.createNewCohort = this.createNewCohort.bind(this);
  }

  createNewCohort() {
    this.props.history.push("");
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
