import * as actionTypes from '../utils/actionTypes'

export const registerNewTaskToColumn = (columnId, newTaskId) => ({
  type: actionTypes.registerNewTaskToColumn,
  columnId,
  newTaskId,
})

export const updateInputTask = (columnId, inputTask) => ({
  type: actionTypes.updateInputTask,
  inputTask,
  columnId,
})

export const createNewColumn = (newColumnId) => ({
  type: actionTypes.createNewColumn,
  newColumnId,
})

export const updateEditingColumnTitle = (columnId, changedColumnTitle) => ({
  type: actionTypes.updateEditingColumnTitle,
  columnId,
  changedColumnTitle,
})

export const enableEditingColumnTitle = (columnId) => ({
  type: actionTypes.enableEditingColumnTitle,
  columnId,
})