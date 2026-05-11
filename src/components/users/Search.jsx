import React, { useContext, useState } from "react";

import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "danger");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" className="btn btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
