import * as actionTypes from '../utils/actionTypes';
import columns, { initialColumnState } from './columns';

const initialBoardState = [
  {
    columns: initialColumnState,
  }
];

const boards = (state = initialBoardState, action) => {
  return [{columns: columns(state[0].columns, action)}];
};

export default boards;