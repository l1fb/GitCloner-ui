import React, { Component } from "react";

class CohortEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>demo</div>
        {console.log(this.props)}
      </div>
    );
  }
}

export default CohortEntry;
