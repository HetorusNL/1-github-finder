import React, { Component } from "react";

import UserItem from "./UserItem";

class Users extends Component {
  userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
  };

  state = {
    users: [
      {
        login: "HetorusNL",
        id: 17402329,
        avatar_url: "https://avatars0.githubusercontent.com/u/17402329?v=4",
        html_url: "https://github.com/HetorusNL"
      },
      {
        login: "mojombo",
        id: 1,
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        login: "defunkt",
        id: 2,
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt"
      }
    ]
  };

  render() {
    return (
      <div style={this.userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
