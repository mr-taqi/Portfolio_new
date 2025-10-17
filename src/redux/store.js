import { combineReducers, legacy_createStore } from "redux";
import { projectReducer } from "./ProjectReducer/reducer";

const reduxStore = combineReducers({
  projectRedux: projectReducer,
});

export const store = legacy_createStore(reduxStore);
