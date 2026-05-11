import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import GithubContext from "./context/github/GithubContext";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";

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
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user/:login" element={<User />} />
            <Route exact path="/about" element={<About />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
