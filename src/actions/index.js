import * as actionTypes from '../utils/actionTypes';

export const onItemClick = (columnNumber, taskNumber) => ({
  type: actionTypes.singleTaskDone,
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

export const onSubmitTask = (columnNumber, submittedValue, event) => ({
  type: actionTypes.addNewTask,
  submittedValue,
  event,
  columnNumber,
});

export const onInputTask = (columnNumber, event) => ({
  type: actionTypes.inputTask,
  event,
  columnNumber,
});

export const onClickAddColumn = () => ({
  type: actionTypes.addNewColumn,
});

export const onChangeColumnTitle = (columnNumber, event) => ({
  type: actionTypes.editColumnTitle,
  columnNumber,
  event,
});

export const onClickColumnTitle = (columnNumber) => ({
  type: actionTypes.onClickColumnTitle,
  columnNumber,
});