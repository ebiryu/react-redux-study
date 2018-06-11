// @flow

import * as actionTypes from '../utils/actionTypes';
import type { BoardAction } from '../actions/boards'

export type TypeOfBoard = {
  +id: string,
  +name: string,
  +columns: Array<string>,
}

export type TypeOfBoards = {
  +byId: {
    +[id: string]: TypeOfBoard,
  },
  +currentId: string,
  +isActive: boolean,
}

const initialBoardState = {
  byId: {
    "board1": {
      id: "board1",
      name: "first board",
      columns: ["column1"],
    },
    "board2": {
      id: "board2",
      name: "second board",
      columns: ["column2"],
    },
  },
  currentId: "board1",
  isActive: false,
}

const boards = (state: TypeOfBoards = initialBoardState, action: BoardAction): TypeOfBoards => {
  let nextBoards = Object.assign({}, state.byId)
  const action_boardId = action.boardId ? action.boardId : ""
  switch (action.type) {
  case actionTypes.openSelectedBoard:
    return {
      ...state,
      isActive: true,
      currentId: action.boardId,
    }
  case actionTypes.backToBoardList:
    return {
      ...state,
      isActive: false,
    }
  case actionTypes.registerNewColumnToBoard:
    nextBoards[action.boardId] = {
      columns: [ ...state.byId[action_boardId].columns, action.newColumnId ]
    }
    return { ...state, byId: nextBoards, }
  case actionTypes.createNewBoard:
    nextBoards[action.newBoardId] = {
      id: action.newBoardId,
      name: "new Board",
      columns: [],
    }
    return { ...state, byId: nextBoards, }
  default:
    return state
  }
}

export default boards;