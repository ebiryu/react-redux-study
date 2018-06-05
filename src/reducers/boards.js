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
  allIds: ["board1", "board2"],
  currentId: "board1",
  isBoardActive: false,
}

const boards = (state = initialBoardState, action) => {
  let nextBoardList = Object.assign({}, state.byId)
  const selectedBoard = state.byId[action.boardNumber]
  switch (action.type) {
  case actionTypes.openSelectedBoard:
    return {
      ...state,
      isBoardActive: true,
      currentId: action.boardNumber,
    }
  case actionTypes.backToBoardList:
    return {
      ...state,
      isBoardActive: false,
    }
  default:
    return state
  }
}

export default boards;