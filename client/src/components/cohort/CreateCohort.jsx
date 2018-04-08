import React, { Component } from "react";
import axios from "axios";

class CreateCohort extends Component {
  constructor() {
    super();
    this.state = {
      cohortName: ""
    };
    this.createCohortInDB = this.createCohortInDB.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.verifyOnEnter = this.verifyOnEnter.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.cohortName);
  }

  verifyOnEnter(e) {
    console.log("changes in the event", e);
  }

  createCohortInDB() {
    axios
      .post("http://localhost:3030/api/cohorts/createCohort", {
        cohortname: this.state.cohortName
      })
      .then(succ => {
        alert("Successfully registered the new cohort!", succ);
      })
      .catch(err => {
        alert(
          "Could not register the Cohort! Maybe it is already registered:",
          err
        );
      });
  }

  render() {
    return (
      <div>
        <div>
          Name of the Cohort
          <input
            name="cohortName"
            onChange={this.onChangeHandler}
            onKeyPress={this.verifyOnEnter}
          />
        </div>
        <button
          onClick={() => {
            this.createCohortInDB();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default CreateCohort;
