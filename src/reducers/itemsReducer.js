import { TO_DO_ITEM } from '../actionTypes';

export default function itemsReducer(state = [], action) {
 
  if (action.type === TO_DO_ITEM) {
    return [...state , {title:action.payload}];
  }
  return state;
}
