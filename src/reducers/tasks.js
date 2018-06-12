// @flow

import * as actionTypes from '../utils/actionTypes'
import type { TypeOfTasks, TaskActions } from '../types/Task'

const initialTaskState = {
  byId: {
    "task1": {
      id: "task1",
      name: "ひとつめ",
      isDone: false,
      isHovered: false,
      isTaskEditable: false,
    },
    "task2": {
      id: "task2",
      name: "ふたつめ",
      isDone: true,
      isHovered: false,
      isTaskEditable: false,
    },
    "task3": {
      id: "task2",
      name: "みっつめ",
      isDone: false,
      isHovered: false,
      isTaskEditable: false,
    },
    "task4": {
      id: "task4",
      name: "よっつめ",
      isDone: true,
      isHovered: false,
      isTaskEditable: false,
    },
  },
}

const tasks = (state: TypeOfTasks = initialTaskState, action: TaskActions): TypeOfTasks => {
  let nextTasks = Object.assign({}, state.byId)
  switch (action.type) {
  case actionTypes.doSingleTask:
    nextTasks[action.taskId] = {
      ...state.byId[action.taskId],
      isDone: !state.byId[action.taskId].isDone,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.showEditButton:
    nextTasks[action.taskId] = {
      ...state.byId[action.taskId],
      isHovered: true,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.hideEditButton:
    nextTasks[action.taskId] = {
      ...state.byId[action.taskId],
      isHovered: false,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.enableEditingTask:
    nextTasks[action.taskId] = {
      ...state.byId[action.taskId],
      isTaskEditable: true,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.disableEditingTask:
    nextTasks[action.taskId] = {
      ...state.byId[action.taskId],
      isTaskEditable: false,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.updateEditingTask:
    nextTasks[action.taskId] = {
      ...state.byId[action.taskId],
      name: action.editString,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.createNewTask:
    nextTasks[action.newTaskId] = {
      id: action.newTaskId,
      name: action.newTaskName,
      isDone: false,
      isHovered: false,
      isTaskEditable: false,
    }
    return { ...state, byId: nextTasks }
  default:
    return state;
  }
}

export default tasks