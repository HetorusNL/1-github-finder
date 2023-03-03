import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./githubReducer";
import {
  CLEAR_USERS,
  GET_INITIAL_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const axiosGet = async (url) => {
    return axios.get(url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
  };

  // clear users from the state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // get initial users
  const getInitialUsers = async () => {
    setLoading();
    const res = await axiosGet(`https://api.github.com/users`);
    dispatch({ type: GET_INITIAL_USERS, payload: res.data });
  };

  // get users repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axiosGet(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // get a single user via the github api
  const getUser = async (username) => {
    setLoading();
    const res = await axiosGet(`https://api.github.com/users/${username}`);
    dispatch({ type: GET_USER, payload: res.data });
  };

  // search github users via the github api
  const searchUsers = async (text) => {
    setLoading();
    const res = await axiosGet(`https://api.github.com/search/users?q=${text}`);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        clearUsers,
        getInitialUsers,
        getUserRepos,
        getUser,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
