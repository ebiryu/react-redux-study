import * as actionTypes from '../utils/actionTypes';

export const doSingleTask = (boardId, columnId, taskId) => ({
  type: actionTypes.doSingleTask,
  boardId,
  columnId,
  taskId,
});

export const showEditButton = (boardId, columnId, taskId) => ({
  type: actionTypes.showEditButton,
  boardId,
  columnId,
  taskId,
});

export const hideEditButton = (boardId, columnId, taskId) => ({
  type: actionTypes.hideEditButton,
  boardId,
  columnId,
  taskId,
});

export const enableEditingTask = (boardId, columnId, taskId) => ({
  type: actionTypes.enableEditingTask,
  boardId,
  columnId,
  taskId,
});

export const disableEditingTask = (boardId, columnId, taskId) => ({
  type: actionTypes.disableEditingTask,
  boardId,
  columnId,
  taskId,
});

export const updateEditingTask = (boardId, columnId, taskId, editString) => ({
  type: actionTypes.updateEditingTask,
  boardId,
  columnId,
  taskId,
  editString,
});

export const createNewTask = (boardId, columnId, submittedValue) => ({
  type: actionTypes.createNewTask,
  boardId,
  submittedValue,
  columnId,
});

export const updateInputTask = (boardId, columnId, inputTask) => ({
  type: actionTypes.updateInputTask,
  boardId,
  inputTask,
  columnId,
});

export const createNewColumn = (newColumnId) => ({
  type: actionTypes.createNewColumn,
  newColumnId,
});

export const registerNewColumnToBoard = (boardId, newColumnId) => ({
  type: actionTypes.registerNewColumnToBoard,
  boardId,
  newColumnId,
});

export const updateEditingColumnTitle = (boardId, columnId, changedColumnTitle) => ({
  type: actionTypes.updateEditingColumnTitle,
  boardId,
  columnId,
  changedColumnTitle,
});

export const enableEditingColumnTitle = (boardId, columnId) => ({
  type: actionTypes.enableEditingColumnTitle,
  boardId,
  columnId,
});

export const openSelectedBoard = (boardId) => ({
  type: actionTypes.openSelectedBoard,
  boardId,
})

export const backToBoardList = () => ({
  type: actionTypes.backToBoardList,
})