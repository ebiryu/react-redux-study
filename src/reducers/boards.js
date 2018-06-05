import * as actionTypes from '../utils/actionTypes';
import columns, { initialColumnState } from './columns';

const initialBoardState = {
  boardList: [
    {
      name: "first board",
      columns: initialColumnState,
    },
    {
      name: "second board",
      columns: initialColumnState,
    },
  ],
  isActive: false,
  whichIsActive: 0,
};

const boards = (state = initialBoardState, action) => {
  let nextBoardList = state.boardList.concat()
  const selectedBoard = state.boardList[action.boardNumber]
  switch (action.type) {
  case actionTypes.openSelectedBoard:
    return {
      ...state,
      isActive: true,
      whichIsActive: action.boardNumber,
    }
  case actionTypes.backToBoardList:
    return {
      ...state,
      isActive: false,
    }
  default:
    if (action.boardNumber !== undefined) {
      nextBoardList[action.boardNumber] = {
        ...selectedBoard,
        columns: columns(state.boardList[action.boardNumber].columns, action),
      }
      return {
        ...state,
        boardList: nextBoardList,
      }
    }
    return state
  }
};

export default boards;