import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  userReducer,
});

export default rootReducer;
