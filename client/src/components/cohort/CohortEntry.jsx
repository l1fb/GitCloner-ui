import React, { Component } from "react";
import axios from "axios";

import BackButton from "../buttons/BackButton.jsx";

class CohortEntry extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // getStudentsFromCohort(this.props.location.name);
  }

  //draggable box function
  //the received arguments are in space.
  //will use split to separate each invocation

  //manual entry input.

  render() {
    return (
      <div>
        <div>{this.props.location.name}</div>

        <div>
          Easy Entry
          <div>
            Drag Students Name:
            <input />
          </div>
          <div>
            Drag GitHub Handles:
            <input />
          </div>
          <button>Easy Register Students</button>
        </div>

        <div>
          Manual Entry
          <div>
            Student Name:<input />
          </div>
          <div>
            GitHubHandle:<input />
          </div>
          <button>Register A Student</button>
        </div>
      </div>
    );
  }
}

export default CohortEntry;
