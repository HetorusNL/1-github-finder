import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  axiosGet = async (url) => {
    return axios.get(url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
  };

  // initially search for the first X users by their id when the page loads
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await this.axiosGet(`https://api.github.com/users`);
    this.setState({ users: res.data, loading: false });
  }

  // search github users via the github api
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await this.axiosGet(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // get a single user via the github api
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await this.axiosGet(`https://api.github.com/users/${username}`);
    this.setState({ user: res.data, loading: false });
  };

  // get users repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await this.axiosGet(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    this.setState({ repos: res.data, loading: false });
  };

  // clear users from the state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // show an alert
  setAlert = (msg, type) => {
    // store the msg and type information in alert object in state
    this.setState({ alert: { msg, type } });
    // if the timeout was already set, unset the timeout to reset it to the full period
    if (this.timeoutID !== null) {
      clearTimeout(this.timeoutID);
    }
    // set the timeout and store the timeout ID
    this.timeoutID = setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const { users, user, repos, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
