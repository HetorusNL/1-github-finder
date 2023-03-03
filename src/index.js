import React from "react";
import ReactDOM from "react-dom";

import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import App from "./App";

ReactDOM.render(
  <AlertState>
    <GithubState>
      <App />
    </GithubState>
  </AlertState>,
  document.getElementById("root")
);
