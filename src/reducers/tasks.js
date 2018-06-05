import * as actionTypes from '../utils/actionTypes';

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
  allIds: ["task1", "task2", "task3", "task4"],
}

const tasks = (state = initialTaskState, action) => {
  let nextTasks = Object.assign({}, state.byId)
  const selectedTask = state.byId[action.taskId]
  switch (action.type) {
  case actionTypes.doSingleTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isDone: !selectedTask.isDone,
    }
    return nextTasks
  case actionTypes.showEditButton:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isHovered: true,
    }
    return nextTasks
  case actionTypes.hideEditButton:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isHovered: false,
    }
    return nextTasks
  case actionTypes.enableEditingTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isTaskEditable: true,
    }
    return nextTasks
  case actionTypes.disableEditingTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
      isTaskEditable: false,
    }
    return nextTasks
  case actionTypes.updateEditingTask:
    nextTasks[action.taskId] = {
      ...selectedTask,
      name: action.editString,
    }
    return nextTasks
  default:
    return state;
  }
}

export default tasks