import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";

class SearchBar extends Component {
  toggleMessage = (c) => {
    c.preventDefault();
    //this.setState({ country: !this.state.country });
    this.setState({ country: this.state.query });
    console.log(this.state.country);
  };

  render() {
    console.log("props ", this.props);
    return (
      <nav>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Country"
            aria-label="Search"
            onChange={(e) => this.props.onChange(e)}
          />

          <button
            type="button"
            onClick={() => this.props.onSubmit()}
            className="btn btn-light sm"
          >
            <AiOutlineSearch color="black" size="1.3rem"></AiOutlineSearch>
          </button>
        </form>
      </nav>
    );
  }
}

export default SearchBar;
