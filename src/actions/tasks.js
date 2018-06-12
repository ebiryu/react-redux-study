// @flow

import * as actionTypes from '../utils/actionTypes'

export const doSingleTask = (taskId: string) => ({
  type: actionTypes.doSingleTask,
  taskId,
})

export const showEditButton = (taskId: string) => ({
  type: actionTypes.showEditButton,
  taskId,
})

export const hideEditButton = (taskId: string) => ({
  type: actionTypes.hideEditButton,
  taskId,
})

export const enableEditingTask = (taskId: string) => ({
  type: actionTypes.enableEditingTask,
  taskId,
})

export const disableEditingTask = (taskId: string) => ({
  type: actionTypes.disableEditingTask,
  taskId,
})

export const updateEditingTask = (taskId: string, editString: string) => ({
  type: actionTypes.updateEditingTask,
  taskId,
  editString,
})

export const createNewTask = (newTaskId: string, newTaskName: string) => ({
  type: actionTypes.createNewTask,
  newTaskId,
  newTaskName,
})