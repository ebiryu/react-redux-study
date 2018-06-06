import * as actionTypes from '../utils/actionTypes'

export const doSingleTask = (boardId, columnId, taskId) => ({
  type: actionTypes.doSingleTask,
  boardId,
  columnId,
  taskId,
})

export const showEditButton = (boardId, columnId, taskId) => ({
  type: actionTypes.showEditButton,
  boardId,
  columnId,
  taskId,
})

export const hideEditButton = (boardId, columnId, taskId) => ({
  type: actionTypes.hideEditButton,
  boardId,
  columnId,
  taskId,
})

export const enableEditingTask = (boardId, columnId, taskId) => ({
  type: actionTypes.enableEditingTask,
  boardId,
  columnId,
  taskId,
})

export const disableEditingTask = (boardId, columnId, taskId) => ({
  type: actionTypes.disableEditingTask,
  boardId,
  columnId,
  taskId,
})

export const updateEditingTask = (boardId, columnId, taskId, editString) => ({
  type: actionTypes.updateEditingTask,
  boardId,
  columnId,
  taskId,
  editString,
})

export const createNewTask = (columnId, newTaskId, newTaskName) => ({
  type: actionTypes.createNewTask,
  columnId,
  newTaskId,
  newTaskName,
})