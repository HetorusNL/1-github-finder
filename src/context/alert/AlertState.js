import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./alertReducer";
import { REMOVE_ALERT, SET_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = {
    alert: null,
    timeoutId: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set alert
  const setAlert = (msg, type) => {
    console.log(msg, type);
    const id = setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
