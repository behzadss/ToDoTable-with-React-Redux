import produce from 'immer'
import { TO_DO_ITEM , TO_DO_CHECK_CHANGE,TO_All_SELECT} from '../actionTypes';
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
  })
}
if (action.type === TO_All_SELECT) {

  return produce(state , draft=>{
    for( const item of draft){
      item.checked=action.payload;

    }
  })
}

return state;
}


