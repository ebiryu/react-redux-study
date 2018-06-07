// @flow

import * as actionTypes from '../utils/actionTypes'

export const registerNewTaskToColumn = (columnId: string, newTaskId: string) => ({
  type: actionTypes.registerNewTaskToColumn,
  columnId,
  newTaskId,
})

export const updateInputTask = (columnId: string, inputTask: string) => ({
  type: actionTypes.updateInputTask,
  inputTask,
  columnId,
})

export const createNewColumn = (newColumnId: string) => ({
  type: actionTypes.createNewColumn,
  newColumnId,
})

export const updateEditingColumnTitle = (columnId: string, changedColumnTitle: string) => ({
  type: actionTypes.updateEditingColumnTitle,
  columnId,
  changedColumnTitle,
})

export const enableEditingColumnTitle = (columnId: string) => ({
  type: actionTypes.enableEditingColumnTitle,
  columnId,
})