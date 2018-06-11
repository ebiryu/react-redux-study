// @flow

import { combineReducers, Reducer } from 'redux';
import boards, { type TypeOfBoards } from './boards';
import columns, { type TypeOfColumns } from './columns';
import tasks from './tasks';

const reducer: Reducer<{boards: TypeOfBoards, columns: TypeOfColumns, tasks: empty}> = combineReducers({
  boards,
  columns,
  tasks,
})

export default reducer