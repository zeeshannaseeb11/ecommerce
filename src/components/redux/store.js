import { createStore, applyMiddleware, compose } from "redux";
import combinereducers from "./reducers";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinereducers,
  storeEnhancers(applyMiddleware(thunk))
);

export default store;
