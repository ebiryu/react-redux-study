import * as actionTypes from '../utils/actionTypes';

export const onClickTask = (columnNumber, taskNumber) => ({
  type: actionTypes.onClickTask,
  taskNumber,
  columnNumber,
});

export const onMouseEnterItem = (columnNumber, taskNumber) => ({
  type: actionTypes.onMouseEnterItem,
  columnNumber,
  taskNumber,
});

export const onMouseLeaveItem = (columnNumber, taskNumber) => ({
  type: actionTypes.onMouseLeaveItem,
  columnNumber,
  taskNumber,
});

export const onClickEditItem = (columnNumber, taskNumber) => ({
  type: actionTypes.onClickEditItem,
  columnNumber,
  taskNumber,
});

export const onBlurItem = (columnNumber, taskNumber) => ({
  type: actionTypes.onBlurItem,
  columnNumber,
  taskNumber,
});

export const onEditItem = (columnNumber, taskNumber, editString) => ({
  type: actionTypes.onEditItem,
  columnNumber,
  taskNumber,
  editString,
});

export const onSubmitTask = (columnNumber, submittedValue) => ({
  type: actionTypes.onSubmitTask,
  submittedValue,
  columnNumber,
});

export const onInputTask = (columnNumber, inputTask) => ({
  type: actionTypes.onInputTask,
  inputTask,
  columnNumber,
});

export const addNewColumn = () => ({
  type: actionTypes.addNewColumn,
});

export const editColumnTitle = (columnNumber, changedColumnTitle) => ({
  type: actionTypes.editColumnTitle,
  columnNumber,
  changedColumnTitle,
});

export const onClickColumnTitle = (columnNumber) => ({
  type: actionTypes.onClickColumnTitle,
  columnNumber,
});

export const onClickBoardListItem = (boardNumber) => ({
  type: actionTypes.onClickBoardListItem,
  boardNumber,
})

export const onClickBackButton = () => ({
  type: actionTypes.onClickBackButton,
})