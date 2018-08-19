import { INPUT_VALUE_CHANGE, TO_DO_ITEM } from '../actionTypes';
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