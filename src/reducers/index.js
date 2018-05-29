import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';

const initialColumnState = [
  {
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
  },
  {
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
  },
];

const column = (state = initialColumnState, action) => {
  switch (action.type) {
  case actionTypes.singleTaskDone:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          tasks: column.tasks.map((task,index) =>
            (index === action.taskNumber)
              ? {...task, isDone: !task.isDone}
              : task
          ),
        }
        : column
    );
  case actionTypes.addNewTask:
    action.event.preventDefault();
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          inputValue: '',
          tasks: [
            {
              name: action.submittedValue,
              isDone: false,
            },
            ...column.tasks
          ]
        }
        : column
    );
  case actionTypes.inputTask:
    // action.event.preventDefault();
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          inputValue: action.event.target.value,
        }
        : column
    );
  default:
    return state;
  }
}

const reducer = combineReducers({
  column,
});

export default reducer;