import { INPUT_VALUE_CHANGE } from '../actionTypes';

export default function inputValueReducer(state = '', action) {
    if (action.type === INPUT_VALUE_CHANGE) {
        return action.payload;
      }
    return state;
  }