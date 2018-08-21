import produce from 'immer'
import { TO_DO_ITEM , TO_DO_CHECK_CHANGE,TO_All_SELECT,SET_DONE,SET_REMOVE,MOVE_UP,MOVE_DOWN} from '../actionTypes';
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

if (action.type === SET_DONE) {
  return produce(state, draft => {
    for (const item of draft) {
      if (item.checked) {
        item.done = true;
      }

      item.checked = false;
    }
  });
}
if (action.type === SET_REMOVE) {
  return state.filter(item=>!item.checked)
}
if (action.type === MOVE_DOWN) {
  const newState = [...state];
  const index = action.payload;

  const temp = newState[index];
  newState[index] = newState[index + 1];
  newState[index + 1] = temp;

  return newState;
}
if (action.type === MOVE_UP) {
  const newState = [...state];
  const index = action.payload;

  const temp = newState[index - 1];
  newState[index - 1] = newState[index];
  newState[index] = temp;

  return newState;
}

return state;
}


