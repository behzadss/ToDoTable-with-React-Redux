import { INPUT_VALUE_CHANGE } from '../actionTypes';
export function inputValueChange(value) {
    return {
      type: INPUT_VALUE_CHANGE,
      payload: value,
    };
  }