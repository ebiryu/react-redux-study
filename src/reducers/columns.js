// @flow

import * as actionTypes from '../utils/actionTypes';
import type { ColumnAction } from '../actions/columns';

type TypeOfColumn = {
  +id: string,
  +name: string,
  +isTitleEditable: boolean,
  +inputValue: string,
  +tasks: Array<string>,
}

export type TypeOfColumns = {
  +byId: {
    +[id: string]: TypeOfColumn,
  }
}

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
}

const columns = (state: TypeOfColumns = initialColumnState, action: ColumnAction): TypeOfColumns => {
  let nextColumns: { [id: string]: TypeOfColumn } = Object.assign({}, state.byId)
  const action_columnId = action.columnId ? action.columnId : ""
  const action_newTaskId = action.newTaskId ? action.newTaskId : ""
  const action_newColumnId = action.newColumnId ? action.newColumnId : ""
  switch (action.type) {
  case actionTypes.registerNewTaskToColumn: {
    nextColumns[action_columnId] = {
      ...nextColumns[action_columnId],
      tasks: [action_newTaskId, ...nextColumns[action_columnId].tasks],
      inputValue: '',
    }
    return { ...state, byId: nextColumns, }
  }
  case actionTypes.updateInputTask: {
    nextColumns[action_columnId] = {
      ...nextColumns[action_columnId],
      inputValue: action.inputTask,
    }
    return { ...state, byId: nextColumns, }
  }
  case actionTypes.createNewColumn:
    nextColumns[action_newColumnId] = {
      id: action_newColumnId,
      name: "title",
      isTitleEditable: false,
      inputValue: "",
      tasks: [],
    }
    return { ...state, byId: nextColumns, }
  case actionTypes.updateEditingColumnTitle:
    nextColumns[action_columnId] = {
      ...state.byId[action_columnId],
      name: action.changedColumnTitle,
    }
    return { ...state, byId: nextColumns, }
  case actionTypes.enableEditingColumnTitle:
    nextColumns[action_columnId] = {
      ...state.byId[action_columnId],
      isTitleEditable: !state.byId[action_columnId].isTitleEditable,
    }
    return { ...state, byId: nextColumns, }
  default:
    return state
  }
}

export default columns