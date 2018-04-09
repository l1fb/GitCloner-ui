import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={require("../../public/assets/icons/STicon.ico")} />
        <h1>Hack Reactor Git Cloner</h1>
      </div>
    );
  }
}

export default Nav;
