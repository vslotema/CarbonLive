import React, { Component, Route, About } from "react";
import Country from "../FetchData";

class CarbonLive extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>HELLO</h1>
        <Country />
      </div>
    );
  }
}

export default CarbonLive;
