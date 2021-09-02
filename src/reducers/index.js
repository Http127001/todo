import { combineReducers } from 'redux';
import todos from './todos';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  todos,
  form: formReducer,
});
