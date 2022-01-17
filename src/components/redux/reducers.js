import { combineReducers } from "redux";
import auth from "../account/ducks/reducer";

const combinereducers = combineReducers({
  auth,
});

export default combinereducers;
