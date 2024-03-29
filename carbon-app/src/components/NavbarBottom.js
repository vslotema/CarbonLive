import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faCloudMeatball } from "@fortawesome/free-solid-svg-icons";
import "./NavbarBottom.css";

const tabs = [
  {
    route: "/",
    icon: faCloudMeatball,
    label: "CO2 Live",
  },
  {
    route: "/powerbreakdown",
    icon: faPlug,
    label: "Breakdown",
  },
];

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-bottom navbar-light bottom-tab-nav"
          role="navigation"
        >
          <Nav className="w-100">
            <div className=" d-flex flex-row justify-content-around w-100">
              {tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <NavLink
                    exact
                    to={tab.route}
                    className="nav-link bottom-nav-link"
                    activeClassName="active"
                  >
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon} />
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))}
            </div>
          </Nav>
        </nav>
      </div>
    );
  }
}

export default Navigation;
