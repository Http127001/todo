import { combineReducers } from "redux";
import todos from "./todos";
import visible from "./visible";
import { reducer as formReducer } from "redux-form"

export default combineReducers({
  todos,
  visible,
  form: formReducer,
});
