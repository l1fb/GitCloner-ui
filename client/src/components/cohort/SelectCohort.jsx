import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BackButton from "../buttons/BackButton.jsx";

class SelectCohort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohorts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3030/api/cohorts/getAllCohort")
      .then(succ => {
        console.log("what is this lol", succ.data);
        this.setState({
          cohorts: succ.data
        });
      })
      .catch(err => {
        console.log("Failed to getAllCohorts", err);
      });
  }

  render() {
    return (
      <div>
        {this.state.cohorts.map((cohort, i) => {
          return (
            <div>
              <div key={i}>{cohort.cohortname}</div>
              <Link
                to={{
                  pathname: "/cohortEntry",
                  name: cohort.cohortname,
                  id: cohort.id
                }}
              >
                <button> view </button>
              </Link>
            </div>
          );
        })}
        <BackButton />
      </div>
    );
  }
}

export default SelectCohort;
