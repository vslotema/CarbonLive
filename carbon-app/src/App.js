import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CarbonLive from "./components/CarbonLive/CarbonLive";
import SearchBar from "./components/SearchBar";
import FetchData from "./components/FetchData";

class App extends Component {
  state = {
    carbonIntensity: [],
    breakdown: [],
  };

  handleCarbonData = (carbonIntensity) => {
    this.setState({ carbonIntensity });
    //this.setState({breakdown});
    console.log("Carbon Intensity ", carbonIntensity);
    // console.log("Breakdown ", breakdown);
  };

  handlePCBData = (breakdown) => {
    this.setState({ breakdown });
    //this.setState({breakdown});
    console.log("Breakdown ", breakdown);
    // console.log("Breakdown ", breakdown);
  };

  render() {
    console.log("country ", this.state.country);
    return (
      <React.Fragment>
        <FetchData
          receiveCarbon={this.handleCarbonData}
          receivePCB={this.handlePCBData}
          //  onChange={this.handleChange}
          // onSubmit={this.handleSubmit}
        ></FetchData>
      </React.Fragment>
    );
  }
}

export default App;
