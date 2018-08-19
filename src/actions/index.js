import { INPUT_VALUE_CHANGE, TO_DO_ITEM,TO_DO_CHECK_CHANGE } from '../actionTypes';
export function inputValueChange(value) {
    return {
      type: INPUT_VALUE_CHANGE,
      payload: value,
    };
  }
  export function todoItem(title) {
    return {
      type: TO_DO_ITEM,
      payload: title,
    };
  }
  export function toItemCheckChange(index , checked) {
    return {
      type: TO_DO_CHECK_CHANGE,
      payload: {index, checked},
    };
  }