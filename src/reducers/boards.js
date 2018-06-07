import * as actionTypes from '../utils/actionTypes';

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

const boards = (state = initialBoardState, action) => {
  let nextBoards = Object.assign({}, state.byId)
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
    nextBoards[action.boardId].columns.push(action.newColumnId)
    return { ...state, byId: nextBoards, }
  default:
    return state
  }
}

export default boards;