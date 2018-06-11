// @flow

import * as actionTypes from '../utils/actionTypes'
import type { TaskAction } from '../types/Task'

export const doSingleTask = (taskId: string): TaskAction => ({
  type: actionTypes.doSingleTask,
  taskId,
})

export const showEditButton = (taskId: string): TaskAction => ({
  type: actionTypes.showEditButton,
  taskId,
})

export const hideEditButton = (taskId: string): TaskAction => ({
  type: actionTypes.hideEditButton,
  taskId,
})

export const enableEditingTask = (taskId: string): TaskAction => ({
  type: actionTypes.enableEditingTask,
  taskId,
})

export const disableEditingTask = (taskId: string): TaskAction => ({
  type: actionTypes.disableEditingTask,
  taskId,
})

export const updateEditingTask = (taskId: string, editString: string): TaskAction => ({
  type: actionTypes.updateEditingTask,
  taskId,
  editString,
})

export const createNewTask = (newTaskId: string, newTaskName: string): TaskAction => ({
  type: actionTypes.createNewTask,
  newTaskId,
  newTaskName,
})