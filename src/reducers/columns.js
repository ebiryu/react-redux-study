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
  let nextAllIds = state.allIds.concat()
  const selectedColumn = state.byId[action.columnId]
  switch (action.type) {
  case actionTypes.createNewTask:
    nextColumns[action.columnId].tasks.unshift(action.newTaskId)
    nextColumns[action.columnId].inputValue = ''
    return { ...state, byId: nextColumns, }
  case actionTypes.updateInputTask:
    nextColumns[action.columnId] = {
      ...selectedColumn,
      inputValue: action.inputTask,
    }
    return { ...state, byId: nextColumns, }
  case actionTypes.createNewColumn:
    nextColumns[action.newColumnId] = {
      name: "title",
      isTitleEditable: false,
      inputValue: "",
      tasks: [],
    }
    nextAllIds.push(action.newColumnId)
    return { ...state, byId: nextColumns, allIds: nextAllIds, }
  case actionTypes.updateEditingColumnTitle:
    nextColumns[action.columnId] = {
      ...state.byId[action.columnId],
      name: action.changedColumnTitle,
    }
    return { ...state, byId: nextColumns, }
  case actionTypes.enableEditingColumnTitle:
    nextColumns[action.columnId] = {
      ...state.byId[action.columnId],
      isTitleEditable: !state.byId[action.columnId].isTitleEditable,
    }
    return { ...state, byId: nextColumns, }
  default:
    return state
  }
}

export default columns