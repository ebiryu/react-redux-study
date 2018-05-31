import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';

const initialColumnState = [
  {
    isTitleEditable: false,
    columnTitle: "title",
    inputValue: "",
    tasks: [
      {
        name: "ひとつめ",
        isDone: false,
        isHovered: false,
        isTaskEditable: false,
      },
      {
        name: "ふたつめ",
        isDone: true,
        isHovered: false,
        isTaskEditable: false,
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
  case actionTypes.onMouseEnterItem:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          tasks: column.tasks.map((task,index) =>
            (index === action.taskNumber)
              ? {...task, isHovered: true}
              : task
          ),
        }
        : column
    );
  case actionTypes.onMouseLeaveItem:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          tasks: column.tasks.map((task,index) =>
            (index === action.taskNumber)
              ? {...task, isHovered: false}
              : task
          ),
        }
        : column
    );
  case actionTypes.onClickEditItem:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          tasks: column.tasks.map((task,index) =>
            (index === action.taskNumber)
              ? {...task,
                isTaskEditable: true,
              }
              : task
          ),
        }
        : column
    );
  case actionTypes.onBlurItem:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          tasks: column.tasks.map((task,index) =>
            (index === action.taskNumber)
              ? {...task,
                isTaskEditable: false,
              }
              : task
          ),
        }
        : column
    );
  case actionTypes.onEditItem:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          tasks: column.tasks.map((task,index) =>
            (index === action.taskNumber)
              ? {...task, name: action.editString}
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
          ...column,
          inputValue: '',
          tasks: [
            {
              name: action.submittedValue,
              isDone: false,
              isHovered: false,
              isTaskEditable: false,
            },
            ...column.tasks
          ]
        }
        : column
    );
  case actionTypes.inputTask:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          inputValue: action.inputTask,
        }
        : column
    );
  case actionTypes.addNewColumn:
    return [
      ...state,
      {
        isTitleEditable: false,
        columnTitle: "title",
        inputValue: "",
        tasks: [],
      },
    ]
  case actionTypes.editColumnTitle:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          columnTitle: action.changedColumnTitle,
        }
        : column
    );
  case actionTypes.onClickColumnTitle:
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          isTitleEditable: !column.isTitleEditable,
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