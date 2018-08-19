import { combineReducers } from 'redux';
import inputValueReducer from './inputValueReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
  items: itemsReducer,
  inputValue: inputValueReducer,
});