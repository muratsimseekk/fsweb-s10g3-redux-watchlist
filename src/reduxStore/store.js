

import { legacy_createStore as createStore } from "redux";
import favReducer from "../reducers/favReducer";


const store = createStore(favReducer)

export default store