import * as actionTypes from '../utils/actionTypes';

export const onItemClick = (taskNumber) => ({
  type: actionTypes.singleTaskDone,
  taskNumber,
});

export const onSubmitTask = (submittedValue, event) => ({
  type: actionTypes.addNewTask,
  submittedValue,
  event,
});

export const onInputTask = (event) => ({
  type: actionTypes.inputTask,
  event,
});