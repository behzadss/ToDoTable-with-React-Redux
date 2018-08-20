import {
  NEW_TODO_ITEM_TITLE_CHANGE,
  NEW_TODO_ITEM_DEADLINE_CHANGE,
  TO_DO_ITEM
} from '../actionTypes';

const initial_state = {
  title: '',
  deadline: '',
}

export default function newTodoItemReducer(state = initial_state, action) {
  if (action.type === NEW_TODO_ITEM_TITLE_CHANGE) {
    return {...state,  title: action.payload };

  }
  if (action.type === NEW_TODO_ITEM_DEADLINE_CHANGE) {
    return {...state, deadline: action.payload };
  }
  if (action.type === TO_DO_ITEM) {
    return initial_state;
  }
  return state;
}