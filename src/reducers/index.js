import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';

const initialState = [
  {
    name: "ひとつめ",
    isDone: false,
  },
  {
    name: "ふたつめ",
    isDone: true,
  }
];

const items = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.singleTaskDone:
    return state.map((item,index) =>
      (index === action.taskNumber)
        ? {...item, isDone: !item.isDone}
        : item
    );
  case actionTypes.addNewTask:
    action.event.preventDefault();
    return [
      {
        name: action.submittedValue,
        isDone: false,
      },
      ...state
    ]
  default:
    return state;
  }
}

const reducer = combineReducers({
  items,
});

export default reducer;