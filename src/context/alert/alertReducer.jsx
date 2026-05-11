import { REMOVE_ALERT, SET_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case REMOVE_ALERT:
      return { ...state, alert: null, timeoutId: null };
    case SET_ALERT:
      if (state.timeoutId !== null) {
        clearTimeout(state.timeoutId);
      }
      const { msg, type, id } = action.payload;
      return { ...state, alert: { msg, type }, timeoutId: id };
    default:
      return state;
  }
};
