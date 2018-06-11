// @flow

import * as actionTypes from '../utils/actionTypes'

export type ColumnAction = {
  +type: string,
  +columnId?: string,
  +newTaskId?: string,
  +inputTask?: string,
  +newColumnId?: string,
  +changedColumnTitle?: string,
}

export const registerNewTaskToColumn = (columnId: string, newTaskId: string): ColumnAction => ({
  type: actionTypes.registerNewTaskToColumn,
  columnId,
  newTaskId,
})

export const updateInputTask = (columnId: string, inputTask: string): ColumnAction => ({
  type: actionTypes.updateInputTask,
  inputTask,
  columnId,
})

export const createNewColumn = (newColumnId: string): ColumnAction => ({
  type: actionTypes.createNewColumn,
  newColumnId,
})

export const updateEditingColumnTitle = (columnId: string, changedColumnTitle: string): ColumnAction => ({
  type: actionTypes.updateEditingColumnTitle,
  columnId,
  changedColumnTitle,
})

export const enableEditingColumnTitle = (columnId: string): ColumnAction => ({
  type: actionTypes.enableEditingColumnTitle,
  columnId,
})