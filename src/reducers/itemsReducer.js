import produce from 'immer'
import { TO_DO_ITEM , TO_DO_CHECK_CHANGE} from '../actionTypes';
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
 
if (action.type === TO_DO_CHECK_CHANGE) {

  return produce(state , draft=>{
  draft[action.payload.index].checked=action.payload.checked;
  }
)
}
return state;
}


