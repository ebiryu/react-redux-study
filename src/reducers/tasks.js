// @flow

import * as actionTypes from '../utils/actionTypes';
import type { TaskAction } from '../actions/tasks';

type TypeOfTask = {
  +id: string,
  +name: string,
  +isDone: boolean,
  +isHovered: boolean,
  +isTaskEditable: boolean,
}

export type TypeOfTasks = {
  +byId: {
    +[id: string]: TypeOfTask,
  }
}

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

const tasks = (state: TypeOfTasks = initialTaskState, action: TaskAction): TypeOfTasks => {
  let nextTasks = Object.assign({}, state.byId)
  const action_taskId = action.taskId ? action.taskId : ""
  const selectedTask = state.byId[action_taskId]
  switch (action.type) {
  case actionTypes.doSingleTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isDone: !selectedTask.isDone,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.showEditButton:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isHovered: true,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.hideEditButton:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isHovered: false,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.enableEditingTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isTaskEditable: true,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.disableEditingTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isTaskEditable: false,
    }
    return { ...state, byId: nextTasks }
  case actionTypes.updateEditingTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
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