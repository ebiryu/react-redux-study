import * as actionTypes from '../utils/actionTypes'

export const registerNewTaskToColumn = (columnId, newTaskId) => ({
  type: actionTypes.registerNewTaskToColumn,
  columnId,
  newTaskId,
})

export const updateInputTask = (boardId, columnId, inputTask) => ({
  type: actionTypes.updateInputTask,
  boardId,
  inputTask,
  columnId,
})

export const createNewColumn = (newColumnId) => ({
  type: actionTypes.createNewColumn,
  newColumnId,
})

export const updateEditingColumnTitle = (boardId, columnId, changedColumnTitle) => ({
  type: actionTypes.updateEditingColumnTitle,
  boardId,
  columnId,
  changedColumnTitle,
})

export const enableEditingColumnTitle = (boardId, columnId) => ({
  type: actionTypes.enableEditingColumnTitle,
  boardId,
  columnId,
})