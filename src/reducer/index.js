import { combineReducers } from "redux";

const rootReducer = combineReducers({
  state: (state = {}) => state,
  omega: (omega = {}) => omega
});

export default rootReducer;
