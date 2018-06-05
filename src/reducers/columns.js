import * as actionTypes from '../utils/actionTypes';

export const initialColumnState = {
  byId: {
    "column1": {
      id: "column1",
      name: "title1",
      isTitleEditable: false,
      inputValue: "",
      tasks: ["task1", "task2"],
    },
    "column2": {
      id: "column2",
      name: "title2",
      isTitleEditable: false,
      inputValue: "",
      tasks: ["task3", "task4"],
    },
  },
  allIds: ["column1", "column2"],
}

const columns = (state = initialColumnState, action) => {
  let nextColumns = Object.assign({}, state.byId)
  const selectedColumn = state.byId[action.columnNumber]
  switch (action.type) {
  case actionTypes.createNewTask:
    nextColumns[action.columnNumber] = {
      ...selectedColumn,
      inputValue: '',
      tasks: [
        {
          name: action.submittedValue,
          isDone: false,
          isHovered: false,
          isTaskEditable: false,
        },
        ...selectedColumn.tasks
      ]
    }
    return nextColumns
  case actionTypes.updateInputTask:
    nextColumns[action.columnNumber] = {
      ...state[action.columnNumber],
      inputValue: action.inputTask,
    }
    return nextColumns
  case actionTypes.createNewColumn:
    return [
      ...state,
      {
        isTitleEditable: false,
        columnTitle: "title",
        inputValue: "",
        tasks: [],
      },
    ]
  case actionTypes.updateEditingColumnTitle:
    nextColumns[action.columnNumber] = {
      ...state[action.columnNumber],
      columnTitle: action.changedColumnTitle,
    }
    return nextColumns
  case actionTypes.enableEditingColumnTitle:
    nextColumns[action.columnNumber] = {
      ...state[action.columnNumber],
      isTitleEditable: !state[action.columnNumber].isTitleEditable,
    }
    return nextColumns
  default:
    return nextColumns
  }
}

export default columns