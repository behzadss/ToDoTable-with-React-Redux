import {NEW_TODO_ITEM_TITLE_CHANGE,
  NEW_TODO_ITEM_DEADLINE_CHANGE, TO_DO_ITEM,TO_DO_CHECK_CHANGE,TO_All_SELECT } from '../actionTypes';
  export function newTodoItemTitleChange(value) {
    return {
      type: NEW_TODO_ITEM_TITLE_CHANGE,
      payload: value,
    };
  }
  
  export function newTodoItemDeadlineChange(value) {
    return {
      type: NEW_TODO_ITEM_DEADLINE_CHANGE,
      payload: value,
    };
  }
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
  
  
  export function toItemCheckChange(index , checked) {
    return {
      type: TO_DO_CHECK_CHANGE,
      payload: {index, checked},
    };
  }