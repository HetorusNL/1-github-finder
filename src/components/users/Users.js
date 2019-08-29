import React, { Component } from "react";

import UserItem from "./UserItem";

class Users extends Component {
  userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
  };

  render() {
    return (
      <div style={this.userStyle}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
