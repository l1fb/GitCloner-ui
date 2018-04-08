import React, { Component } from "react";
import axios from "axios";

class CreateCohort extends Component {
  constructor() {
    super();
    this.state = {};
    this.createCohortInDB = this.createCohortInDB.bind(this);
  }

  createCohortInDB() {}

  render() {
    return (
      <div>
        <div>
          Name of the Cohort
          <input />
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default CreateCohort;
