import React, { Component } from "react";

class Cohort extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>{this.props.cohortName}</button>
      </div>
    );
  }
}

export default Cohort;
