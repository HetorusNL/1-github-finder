import React, { Component } from "react";

class Search extends Component {
  state = {
    username: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.username);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn btn-block" />
        </form>
      </div>
    );
  }
}

export default Search;
