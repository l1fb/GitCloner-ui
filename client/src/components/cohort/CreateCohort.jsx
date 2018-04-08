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
    if (e.key === "Enter" && this.state.password === "hir") {
      this.props.history.push("/home");
    } else if (e.key === "Enter" && this.state.password !== "hir") {
      alert("Invalid Passwprd");
    }
  }

  createCohortInDB() {}

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
        <button>Submit</button>
      </div>
    );
  }
}

export default CreateCohort;
