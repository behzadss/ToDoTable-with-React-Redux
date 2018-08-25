import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import itemsReducer from './itemsReducer';

export default combineReducers({
  items: itemsReducer,
  form:formReducer,
});
