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
        name: "みっつめ",
        isDone: false,
      },
      {
        name: "よっつめ",
        isDone: true,
      }
    ]
  },
];

const columns = (state = initialColumnState, action) => {
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
  columns,
});

export default reducer;