import { INPUT_VALUE_CHANGE,TO_DO_ITEM} from '../actionTypes';

export default function inputValueReducer(state = '', action) {
    if (action.type === INPUT_VALUE_CHANGE) {
        return action.payload;
      }
      if (action.type === TO_DO_ITEM) {
        return '';
      }
    return state;
  }