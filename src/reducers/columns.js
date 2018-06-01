import * as actionTypes from '../utils/actionTypes';

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
  case actionTypes.onSubmitTask:
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
  case actionTypes.onInputTask:
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
    return state.map((column,index) => 
      (index === action.columnNumber)
        ? {
          ...column,
          tasks: tasks(column.tasks,action)
        }
        : column
    );
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
  case actionTypes.onClickTask:
    return state.map((task,index) =>
      (index === action.taskNumber)
        ? {...task, isDone: !task.isDone}
        : task
    );
  case actionTypes.onMouseEnterItem:
    return state.map((task,index) =>
      (index === action.taskNumber)
        ? {...task, isHovered: true}
        : task
    );
  case actionTypes.onMouseLeaveItem:
    return state.map((task,index) =>
      (index === action.taskNumber)
        ? {...task, isHovered: false}
        : task
    );
  case actionTypes.onClickEditItem:
    return state.map((task,index) =>
      (index === action.taskNumber)
        ? {...task, isTaskEditable: true}
        : task
    );
  case actionTypes.onBlurItem:
    return state.map((task,index) =>
      (index === action.taskNumber)
        ? {...task, isTaskEditable: false}
        : task
    );
  case actionTypes.onEditItem:
    return state.map((task,index) =>
      (index === action.taskNumber)
        ? {...task, name: action.editString}
        : task
    );
  default:
    return state;
  }
}

export default columns;