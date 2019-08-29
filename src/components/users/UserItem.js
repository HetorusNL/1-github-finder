import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: 17402329,
    login: "HetorusNL",
    avatar_url: "https://avatars0.githubusercontent.com/u/17402329?v=4",
    html_url: "https://github.com/HetorusNL"
  };

  render() {
    const { avatar_url, html_url, login } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
