import * as actionTypes from '../utils/actionTypes';

export const doSingleTask = (boardNumber, columnNumber, taskNumber) => ({
  type: actionTypes.doSingleTask,
  boardNumber,
  columnNumber,
  taskId: taskNumber,
});

export const showEditButton = (boardNumber, columnNumber, taskNumber) => ({
  type: actionTypes.showEditButton,
  boardNumber,
  columnNumber,
  taskId: taskNumber,
});

export const hideEditButton = (boardNumber, columnNumber, taskNumber) => ({
  type: actionTypes.hideEditButton,
  boardNumber,
  columnNumber,
  taskId: taskNumber,
});

export const enableEditingTask = (boardNumber, columnNumber, taskNumber) => ({
  type: actionTypes.enableEditingTask,
  boardNumber,
  columnNumber,
  taskId: taskNumber,
});

export const disableEditingTask = (boardNumber, columnNumber, taskNumber) => ({
  type: actionTypes.disableEditingTask,
  boardNumber,
  columnNumber,
  taskId: taskNumber,
});

export const updateEditingTask = (boardNumber, columnNumber, taskNumber, editString) => ({
  type: actionTypes.updateEditingTask,
  boardNumber,
  columnNumber,
  taskId: taskNumber,
  editString,
});

export const createNewTask = (boardNumber, columnNumber, submittedValue) => ({
  type: actionTypes.createNewTask,
  boardNumber,
  submittedValue,
  columnNumber,
});

export const updateInputTask = (boardNumber, columnNumber, inputTask) => ({
  type: actionTypes.updateInputTask,
  boardNumber,
  inputTask,
  columnNumber,
});

export const createNewColumn = (boardNumber) => ({
  type: actionTypes.createNewColumn,
  boardNumber,
});

export const updateEditingColumnTitle = (boardNumber, columnNumber, changedColumnTitle) => ({
  type: actionTypes.updateEditingColumnTitle,
  boardNumber,
  columnNumber,
  changedColumnTitle,
});

export const enableEditingColumnTitle = (boardNumber, columnNumber) => ({
  type: actionTypes.enableEditingColumnTitle,
  boardNumber,
  columnNumber,
});

export const openSelectedBoard = (boardNumber) => ({
  type: actionTypes.openSelectedBoard,
  boardNumber,
})

export const backToBoardList = () => ({
  type: actionTypes.backToBoardList,
})