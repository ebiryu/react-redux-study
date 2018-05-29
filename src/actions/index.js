import * as actionTypes from '../utils/actionTypes';

export const onItemClick = (columnNumber, taskNumber) => ({
  type: actionTypes.singleTaskDone,
  taskNumber,
  columnNumber,
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