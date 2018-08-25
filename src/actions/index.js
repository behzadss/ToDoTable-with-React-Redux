import {
  TO_DO_ITEM,TO_DO_CHECK_CHANGE,TO_All_SELECT,SET_DONE,SET_REMOVE,MOVE_UP,MOVE_DOWN} from '../actionTypes';
  
  
  export function todoItem(item) {
    return {
      type: TO_DO_ITEM,
      payload: item,
    };
  }
  export function selectAll(selected) {
    return {
      type: TO_All_SELECT,
      payload: selected,
    };
  }
  export function movedown(index) {
    return {
      type: MOVE_DOWN,
      payload: index,
    };
  }
  export function moveup(index) {
    return {
      type: MOVE_UP,
      payload: index,
    };
  }
  
  
  export function toItemCheckChange(index , checked) {
    return {
      type: TO_DO_CHECK_CHANGE,
      payload: {index, checked},
    };
  }
  export function SetDoneSelected() {
    return { type: SET_DONE };
  }
  export function SetRemoveSelected() {
    return { type: SET_REMOVE };
  }