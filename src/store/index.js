import reducerAdd from "./reducers/index";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AddCartReducer from "./reducers/AddCartReducer";

const rootReducer = combineReducers({
  reducerAdd,
  AddCartReducer,
  form: formReducer
});

const store = createStore(rootReducer);

export default store;
