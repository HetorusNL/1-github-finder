import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello</h1>
        <UserItem />
      </div>
    );
  }
}

export default App;
