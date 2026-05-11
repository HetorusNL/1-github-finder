import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";

import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertState>
      <GithubState>
        <App />
      </GithubState>
    </AlertState>
  </StrictMode>
);
