import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <form className="form-inline custom-form">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Find your region"
          aria-label="Search"
          onChange={(e) => this.props.onChange(e)}
          onKeyPress={(e) => this.props.onKeyPress(e)}
        />

        <button
          type="button"
          onClick={() => this.props.onSubmit()}
          className="btn custom-button"
          padding="0.0rem"
        >
          <AiOutlineSearch color="white" size="1.2rem "></AiOutlineSearch>
        </button>
      </form>
    );
  }
}

export default SearchBar;
