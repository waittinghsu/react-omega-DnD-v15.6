import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import rootReducer from "../reducer";
const store = createStore(rootReducer, applyMiddleware(thunk, promise));
export default store;
