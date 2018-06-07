// @flow

import * as actionTypes from '../utils/actionTypes'

export const openSelectedBoard = (boardId: string) => ({
  type: actionTypes.openSelectedBoard,
  boardId,
})

export const backToBoardList = () => ({
  type: actionTypes.backToBoardList,
})

export const registerNewColumnToBoard = (boardId: string, newColumnId: string) => ({
  type: actionTypes.registerNewColumnToBoard,
  boardId,
  newColumnId,
})

export const createNewBoard = (newBoardId: string) => ({
  type: actionTypes.createNewBoard,
  newBoardId,
})