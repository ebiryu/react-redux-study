import * as actionTypes from '../utils/actionTypes';

export const onItemClick = (taskNumber) => ({
  type: actionTypes.singleTaskDone,
  taskNumber,
});