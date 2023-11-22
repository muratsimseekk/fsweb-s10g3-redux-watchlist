

import { legacy_createStore as createStore , applyMiddleware } from "redux";
import favReducer from "../reducers/favReducer";
import logger from "redux-logger";

const store = createStore(favReducer , applyMiddleware(logger))

export default store


