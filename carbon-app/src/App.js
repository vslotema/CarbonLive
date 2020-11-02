import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import CarbonLive from "./components/CarbonLive/CarbonLive";
import PowerBreakdown from "./components/PCB/PowerBreakdown";
import FetchData from "./components/FetchData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarBottom from "./components/NavbarBottom";

class App extends Component {
  state = {
    carbonIntensity: [],
    breakdown: [],
    zone: "",
  };

  handleCarbonData = (carbonIntensity) => {
    if (!carbonIntensity) {
      this.setState({ carbonIntensity: [] });
    } else {
      this.setState({ carbonIntensity });
    }

    console.log("Carbon Intensity ", this.state.carbonIntensity);
  };

  handlePCBData = (breakdown) => {
    if (!breakdown) {
      this.setState({ breakdown: [] });
    } else {
      this.setState({ breakdown });
    }
  };

  render() {
    return (
      <React.Fragment>
        <FetchData
          receiveCarbon={this.handleCarbonData}
          receivePCB={this.handlePCBData}
        ></FetchData>
        <Router>
          <NavbarBottom />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <CarbonLive
                  
                  {...props}
                  isAuthed={this.state.carbonIntensity}
                />
              )}
            ></Route>

            <Route
              path="/powerbreakdown"
              render={(props) => (
                <PowerBreakdown {...props} isAuthed={this.state.breakdown} />
              )}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
