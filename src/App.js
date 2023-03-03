import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import GithubContext from "./context/github/GithubContext";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

const App = () => {
  const githubContext = useContext(GithubContext);

  // initially load the first X users by their id when the page loads
  useEffect(() => {
    const fetchData = async () => {
      githubContext.getInitialUsers();
    };
    fetchData().catch(console.error);
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/user/:login" component={User} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
