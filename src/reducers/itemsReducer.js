import { TO_DO_ITEM } from '../actionTypes';
function buildDefaultItem() {
  return {
    title: '',
    deadline: '',
    checked: false,
    done: false,
  };
}
export default function itemsReducer(state = [], action) {
  if (action.type === TO_DO_ITEM) {

    return [...state, { ...buildDefaultItem(), ...action.payload }];
  }
  return state;
}
