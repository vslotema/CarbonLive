import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { Button } from "../Button";

class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  showNavBarItems() {
    return MenuItems.map((item, index) => {
      return (
        <li key={index}>
          <a className={item.cName} href={item.url}>
            {item.title}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {this.showNavBarItems()}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default NavBar;
