import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import newTodoItemReducer from './newTodoItemReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
  items: itemsReducer,
  newTodoItem: newTodoItemReducer,
  form:formReducer,
});
