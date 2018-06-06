import * as actionTypes from '../utils/actionTypes'

export const openSelectedBoard = (boardId) => ({
  type: actionTypes.openSelectedBoard,
  boardId,
})

export const backToBoardList = () => ({
  type: actionTypes.backToBoardList,
})

export const registerNewColumnToBoard = (boardId, newColumnId) => ({
  type: actionTypes.registerNewColumnToBoard,
  boardId,
  newColumnId,
})