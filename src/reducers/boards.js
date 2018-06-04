import * as actionTypes from '../utils/actionTypes';
import columns, { initialColumnState } from './columns';

const initialBoardState = {
  boardList: [
    {
      name: "first board",
      columns: initialColumnState,
    },
  ],
  isActive: false,
  whichIsActive: 0,
};

const boards = (state = initialBoardState, action) => {
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
    return {
      ...state,
      boardList: [
        {
          name: "first board",
          columns: columns(state.boardList[0].columns, action)
        },
      ],
    };
  }
};

export default boards;