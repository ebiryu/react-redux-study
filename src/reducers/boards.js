import * as actionTypes from '../utils/actionTypes';
import columns, { initialColumnState } from './columns';

const initialBoardState = {
  boardList: [
    {
      columns: initialColumnState,
    },
  ],
  isActive: true,
  whichIsActive: 0,
};

const boards = (state = initialBoardState, action) => {
  return {
    boardList: [{columns: columns(state.boardList[0].columns, action)}],
    isActive: true,
    whichIsActive: 0,
  };
};

export default boards;