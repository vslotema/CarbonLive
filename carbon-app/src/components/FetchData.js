import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

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
  };

  retrieveDataFromAPI = () => {
    axios
      .get(URL + ZONES, {
        headers: {
          "auth-token": `${TOKEN}`,
        },
      })
      .then((res) => this.setIDandAcces(res))
      .then(() => this.getData())
      .catch((error) => {
        console.error(error);
      });
  };

  setIDandAcces = (res) => {
    const region = this.getRightFormat();
    let found = false;

    console.log("!!!!! WE HAVE A CONNECTION !!!!!");
    const ID = Object.keys(res.data).filter((i) => {
      if (
        res.data[i].countryName === region &&
        !res.data[i].zoneName &&
        !found
      ) {
        found = true;
        return i;
      } else if (res.data[i].zoneName === region && !found) {
        found = true;
        return i;
      }
    });

    this.setState({ regionID: ID[0] });
    this.setState({ access: res.data[ID[0]].access });
    console.log("retrieved ID ", this.state.regionID);
  };

  getData = () => {
    if (this.checkIfAccess(CARBON))
      this.getCarbonIntensityData(URL + CARBON + "?zone=");

    if (this.checkIfAccess(PCB)) this.getPCBData(URL + PCB + "?zone=");
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
      .get(url + this.state.regionID, {
        headers: {
          "auth-token": `${TOKEN}`,
        },
      })
      .then((res) => {
        console.log("!!!!! WE HAVE A CONNECTION !!!!!");
        this.onSendCarbonData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getPCBData = (url) => {
    axios
      .get(url + this.state.regionID, {
        headers: {
          "auth-token": `${TOKEN}`,
        },
      })
      .then((res) => {
        console.log("!!!!! WE HAVE A CONNECTION !!!!!");
        this.onSendPCBData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  checkIfAccess = (info) => {
    console.log("info ", info);
    let access = false;
    if (this.state.access.some((i) => i === info || i === "*")) access = true;
    console.log("access? ", access);
    return access;
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value,
    });
    console.log("search ", this.state.query);
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
      <div>
        <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default FetchData;
