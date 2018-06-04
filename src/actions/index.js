import * as actionTypes from '../utils/actionTypes';

export const doSingleTask = (columnNumber, taskNumber) => ({
  type: actionTypes.doSingleTask,
  taskNumber,
  columnNumber,
});

export const showEditButton = (columnNumber, taskNumber) => ({
  type: actionTypes.showEditButton,
  columnNumber,
  taskNumber,
});

export const hideEditButton = (columnNumber, taskNumber) => ({
  type: actionTypes.hideEditButton,
  columnNumber,
  taskNumber,
});

export const enableEditingTask = (columnNumber, taskNumber) => ({
  type: actionTypes.enableEditingTask,
  columnNumber,
  taskNumber,
});

export const disableEditingTask = (columnNumber, taskNumber) => ({
  type: actionTypes.disableEditingTask,
  columnNumber,
  taskNumber,
});

export const updateEditingTask = (columnNumber, taskNumber, editString) => ({
  type: actionTypes.updateEditingTask,
  columnNumber,
  taskNumber,
  editString,
});

export const createNewTask = (columnNumber, submittedValue) => ({
  type: actionTypes.createNewTask,
  submittedValue,
  columnNumber,
});

export const updateInputTask = (columnNumber, inputTask) => ({
  type: actionTypes.updateInputTask,
  inputTask,
  columnNumber,
});

export const createNewColumn = () => ({
  type: actionTypes.createNewColumn,
});

export const updateEditingColumnTitle = (columnNumber, changedColumnTitle) => ({
  type: actionTypes.updateEditingColumnTitle,
  columnNumber,
  changedColumnTitle,
});

export const enableEditingColumnTitle = (columnNumber) => ({
  type: actionTypes.enableEditingColumnTitle,
  columnNumber,
});

export const onClickBoardListItem = (boardNumber) => ({
  type: actionTypes.onClickBoardListItem,
  boardNumber,
})

export const onClickBackButton = () => ({
  type: actionTypes.onClickBackButton,
})