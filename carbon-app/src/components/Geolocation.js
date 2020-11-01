import "./Geolocation.css";
import { TiLocationArrowOutline } from "react-icons/ti";
import React, { Component } from "react";

class Geolocation extends Component {
  render() {
    return (
      <button type="button" className="btn btn-dark icon">
        <TiLocationArrowOutline
          color="white"
          size="1.0rem"
          justify-content="left"
        ></TiLocationArrowOutline>
        use location
      </button>
    );
  }
}

export default Geolocation;
