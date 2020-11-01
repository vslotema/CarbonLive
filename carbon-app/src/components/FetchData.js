import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { render } from "react-dom";
import Geolocation from "./Geolocation";

const TOKEN = "rILfhiFrZ3emXcVMGU62";
const URL = "https://api.electricitymap.org/v3/";
const ZONES = "zones";
const CARBON = "carbon-intensity/latest";
const PCB = "power-consumption-breakdown/latest";

class FetchData extends Component {
  state = {
    query: "",
    regionID: "",
    lat: null,
    lon: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        console.log("latitude ", this.state.lat);
        console.log("longitude ", this.state.lon);
      },
      (err) => console.log(err)
    );
  }

  retrieveDataFromAPI = () => {
    axios
      .get(URL + ZONES, {
        headers: {
          "auth-token": `${TOKEN}`,
        },
      })
      .then((res) => this.setID(res))
      .then(() => this.getData("?zone=" + this.state.regionID))
      .catch((error) => {
        console.error(error);
      });
  };

  setID = (res) => {
    const region = this.getRightFormat();

    console.log("!!!!! WE HAVE A CONNECTION !!!!!");
    const ID = Object.keys(res.data).filter(
      (i) => res.data[i].zoneName === region
    );

    if (ID) {
      this.setState({ regionID: ID[0] });
    } else {
      this.setState({ regionID: null });
    }
  };

  getRightFormat = () => {
    let reg = this.state.query.split(" ");
    let right = "";
    for (let i = 0; i < reg.length; i++) {
      right +=
        i !== reg.length - 1
          ? reg[i].charAt(0).toUpperCase() + reg[i].slice(1).toLowerCase() + " "
          : reg[i].charAt(0).toUpperCase() + reg[i].slice(1).toLowerCase();
    }
    return right;
  };

  getData = (query) => {
    this.getCarbonIntensityData(URL + CARBON + query);
    this.getPCBData(URL + PCB + query);
  };

  getCarbonIntensityData = (url) => {
    axios
      .get(url, {
        headers: {
          "auth-token": `${TOKEN}`,
        },
      })
      .then((res) => {
        this.onSendCarbonData(res.data);
      })
      .catch((error) => {
        this.onSendCarbonData(null);
        console.error(error);
      });
  };

  getPCBData = (url) => {
    axios
      .get(url, {
        headers: {
          "auth-token": `${TOKEN}`,
        },
      })
      .then((res) => {
        this.onSendPCBData(res.data);
      })
      .catch((error) => {
        this.onSendPCBData(null);
        console.error(error);
      });
  };

  checkIfAccess = (info) => {
    return this.state.access.some((i) => i === info || i === "*");
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value,
    });
    console.log("search ", this.state.query);
  };

  handleKeypress = (e) => {
    if (e.charCode === 13) {
      this.handleSubmit();
      e.preventDefault();
    }
  };

  handleSubmit = () => {
    this.retrieveDataFromAPI();
  };

  onSendCarbonData = (carbon) => {
    this.props.receiveCarbon(carbon);
  };

  onSendPCBData = (pcb) => {
    this.props.receivePCB(pcb);
  };

  handleLocation = () => {
    console.log("in handle location");
    this.getData("?lat=" + this.state.lat + "lon=" + this.state.lon);
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light sticky-top"
        role="navigation"
      >
        <SearchBar
          onChange={this.handleChange.bind}
          onKeyPress={this.handleKeypress}
          onSubmit={this.handleSubmit}
        />
        <Geolocation onLocation={this.handleLocation} />
      </nav>
    );
  }
}

export default FetchData;
