// @flow

import * as actionTypes from '../utils/actionTypes'
import type { BoardAction } from '../types/Board'

export const openSelectedBoard = (boardId: string): BoardAction => ({
  type: actionTypes.openSelectedBoard,
  boardId,
})

export const backToBoardList = (): BoardAction => ({
  type: actionTypes.backToBoardList,
})

export const registerNewColumnToBoard = 
  (boardId: string, newColumnId: string): BoardAction => ({
    type: actionTypes.registerNewColumnToBoard,
    boardId,
    newColumnId,
  })

export const createNewBoard = 
  (newBoardId: string): BoardAction => ({
    type: actionTypes.createNewBoard,
    newBoardId,
  })