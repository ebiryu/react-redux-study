import * as actionTypes from '../utils/actionTypes'

export const doSingleTask = (taskId) => ({
  type: actionTypes.doSingleTask,
  taskId,
})

export const showEditButton = (taskId) => ({
  type: actionTypes.showEditButton,
  taskId,
})

export const hideEditButton = (taskId) => ({
  type: actionTypes.hideEditButton,
  taskId,
})

export const enableEditingTask = (taskId) => ({
  type: actionTypes.enableEditingTask,
  taskId,
})

export const disableEditingTask = (taskId) => ({
  type: actionTypes.disableEditingTask,
  taskId,
})

export const updateEditingTask = (taskId, editString) => ({
  type: actionTypes.updateEditingTask,
  taskId,
  editString,
})

export const createNewTask = (newTaskId, newTaskName) => ({
  type: actionTypes.createNewTask,
  newTaskId,
  newTaskName,
})