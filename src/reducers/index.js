import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';

const initialColumnState = {
  inputValue: "",
  tasks: [
    {
      name: "ひとつめ",
      isDone: false,
    },
    {
      name: "ふたつめ",
      isDone: true,
    }
  ]
};

const column = (state = initialColumnState, action) => {
  switch (action.type) {
  case actionTypes.singleTaskDone:
    return {
      ...state,
      tasks: state.tasks.map((task,index) =>
        (index === action.taskNumber)
          ? {...task, isDone: !task.isDone}
          : task
      ),
    };
  case actionTypes.addNewTask:
    action.event.preventDefault();
    return {
      inputValue: '',
      tasks: [
        {
          name: action.submittedValue,
          isDone: false,
        },
        ...state.tasks
      ]
    };
  case actionTypes.inputTask:
    // action.event.preventDefault();
    return {
      ...state,
      inputValue: action.event.target.value,
    };
  default:
    return state;
  }
}

const reducer = combineReducers({
  column,
});

export default reducer;