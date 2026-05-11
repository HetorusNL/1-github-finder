import React, { Fragment } from "react";
import packageJson from "../../../package.json";

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>Application to search for Github users, via the Github API</p>
      <p>Version: {packageJson.version}</p>
    </Fragment>
  );
};

export default About;
