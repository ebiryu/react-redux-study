import * as actionTypes from '../utils/actionTypes';

export const initialColumnState = [
  {
    isTitleEditable: false,
    columnTitle: "title",
    inputValue: "",
    tasks: [
      {
        name: "ひとつめ",
        isDone: false,
        isHovered: false,
        isTaskEditable: false,
      },
      {
        name: "ふたつめ",
        isDone: true,
        isHovered: false,
        isTaskEditable: false,
      }
    ]
  },
];

const columns = (state = initialColumnState, action) => {
  let nextColumns = state.concat();
  const selectedColumn = state[action.columnNumber]
  switch (action.type) {
  case actionTypes.createNewTask:
    nextColumns[action.columnNumber] = {
      ...selectedColumn,
      inputValue: '',
      tasks: [
        {
          name: action.submittedValue,
          isDone: false,
          isHovered: false,
          isTaskEditable: false,
        },
        ...selectedColumn.tasks
      ]
    }
    return nextColumns
  case actionTypes.updateInputTask:
    nextColumns[action.columnNumber] = {
      ...state[action.columnNumber],
      inputValue: action.inputTask,
    }
    return nextColumns
  case actionTypes.createNewColumn:
    return [
      ...state,
      {
        isTitleEditable: false,
        columnTitle: "title",
        inputValue: "",
        tasks: [],
      },
    ]
  case actionTypes.updateEditingColumnTitle:
    nextColumns[action.columnNumber] = {
      ...state[action.columnNumber],
      columnTitle: action.changedColumnTitle,
    }
    return nextColumns
  case actionTypes.enableEditingColumnTitle:
    nextColumns[action.columnNumber] = {
      ...state[action.columnNumber],
      isTitleEditable: !state[action.columnNumber].isTitleEditable,
    }
    return nextColumns
  default:
    if (action.columnNumber !== undefined) {
      nextColumns[action.columnNumber] = {
        ...state[action.columnNumber],
        tasks: tasks(state[action.columnNumber].tasks, action)
      }
    }
    return nextColumns
  }
}

const tasks = (state = [], action) => {
  let nextTasks = state.concat()
  const selectedTask = state[action.taskNumber]
  switch (action.type) {
  case actionTypes.doSingleTask:
    nextTasks[action.taskNumber] = {
      ...selectedTask,
      isDone: !selectedTask.isDone,
    }
    return nextTasks
  case actionTypes.showEditButton:
    nextTasks[action.taskNumber] = {
      ...selectedTask,
      isHovered: true,
    }
    return nextTasks
  case actionTypes.hideEditButton:
    nextTasks[action.taskNumber] = {
      ...selectedTask,
      isHovered: false,
    }
    return nextTasks
  case actionTypes.enableEditingTask:
    nextTasks[action.taskNumber] = {
      ...selectedTask,
      isTaskEditable: true,
    }
    return nextTasks
  case actionTypes.disableEditingTask:
    nextTasks[action.taskNumber] = {
      ...selectedTask,
      isTaskEditable: false,
    }
    return nextTasks
  case actionTypes.updateEditingTask:
    nextTasks[action.taskNumber] = {
      ...selectedTask,
      name: action.editString,
    }
    return nextTasks
  default:
    return state;
  }
}

export default columns;