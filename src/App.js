import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const axiosGet = async (url) => {
    return axios.get(url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
  };

  // initially search for the first X users by their id when the page loads
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axiosGet(`https://api.github.com/users`);
      setUsers(res.data);
      setLoading(false);
    };
    fetchData().catch(console.error);
    // eslint-ignore-next-line
  }, []);

  // search github users via the github api
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axiosGet(`https://api.github.com/search/users?q=${text}`);
    setUsers(res.data.items);
    setLoading(false);
  };

  // get a single user via the github api
  const getUser = async (username) => {
    setLoading(true);
    const res = await axiosGet(`https://api.github.com/users/${username}`);
    setUser(res.data);
    setLoading(false);
  };

  // get users repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axiosGet(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setRepos(res.data);
    setLoading(false);
  };

  // clear users from the state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // show an alert
  const showAlert = (msg, type) => {
    // store the msg and type information in alert object in state
    setAlert({ msg, type });
    // if the timeout was already set, unset the timeout to reset it to the full period
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    // set the timeout and store the timeout ID
    setTimeoutId(
      setTimeout(() => {
        setAlert(null);
      }, 5000)
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0}
                    showAlert={showAlert}
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
                  getUser={getUser}
                  getUserRepos={getUserRepos}
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
};

export default App;
