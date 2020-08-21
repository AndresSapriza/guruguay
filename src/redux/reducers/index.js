import { combineReducers } from "redux";
import articles from "./articleReducer";
// import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  articles,
});

export default rootReducer;
