import { combineReducers } from 'redux';
import newTodoItemReducer from './newTodoItemReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
  items: itemsReducer,
  newTodoItem: newTodoItemReducer,
});
