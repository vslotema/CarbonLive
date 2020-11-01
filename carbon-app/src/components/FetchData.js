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
    access: [],
    lat: null,
    lng: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log("latitude ", this.state.lat);
        console.log("longitude ", this.state.lng);
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
      .then((res) => this.setIDandAccess(res))
      .then(() => this.getData())
      .catch((error) => {
        console.error(error);
      });
  };

  setIDandAccess = (res) => {
    const region = this.getRightFormat();
    let found = false;

    console.log("!!!!! WE HAVE A CONNECTION !!!!!");
    const ID = Object.keys(res.data).filter(
      (i) => res.data[i].zoneName === region
    );

    if (ID) {
      this.setState({ regionID: ID[0] });
      // this.setState({ access: res.data[ID[0]].access });
    } else {
      this.setState({ regionID: null });
      // this.setState({ access: null });
    }
  };

  getData = () => {
    //if (this.state.access) {
    //if (this.checkIfAccess(CARBON))
    this.getCarbonIntensityData(URL + CARBON + "?zone=" + this.state.regionID);

    // if (this.checkIfAccess(PCB))
    this.getPCBData(URL + PCB + "?zone=" + this.state.regionID);
    //} else {
    // this.onSendCarbonData(null);
    // this.onSendPCBData(null);
    //}
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

  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light sticky-top"
        role="navigation"
      >
        <SearchBar
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
          onSubmit={this.handleSubmit}
        />
        <Geolocation />
      </nav>
    );
  }
}

export default FetchData;
