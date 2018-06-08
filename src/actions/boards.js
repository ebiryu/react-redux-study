// @flow

import * as actionTypes from '../utils/actionTypes'

export type ActionType =
  | typeof actionTypes.openSelectedBoard
  | typeof actionTypes.backToBoardList
  | typeof actionTypes.registerNewColumnToBoard
  | typeof actionTypes.createNewBoard

export type BoardAction<ActionType> = {
  +type: ActionType,
  +boardId?: string,
  +newColumnId?: string,
  +newBoardId?: string,
}

export const openSelectedBoard = (boardId: string): BoardAction<typeof actionTypes.openSelectedBoard> => ({
  type: actionTypes.openSelectedBoard,
  boardId,
})

export const backToBoardList = (): BoardAction<typeof actionTypes.backToBoardList> => ({
  type: actionTypes.backToBoardList,
})

export const registerNewColumnToBoard = 
  (boardId: string, newColumnId: string): BoardAction<typeof actionTypes.registerNewColumnToBoard> => ({
    type: actionTypes.registerNewColumnToBoard,
    boardId,
    newColumnId,
  })

export const createNewBoard = 
  (newBoardId: string): BoardAction<typeof actionTypes.createNewBoard> => ({
    type: actionTypes.createNewBoard,
    newBoardId,
  })