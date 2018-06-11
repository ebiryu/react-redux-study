// @flow

import { combineReducers, Reducer } from 'redux';
import boards from './boards';
import columns from './columns';
import tasks from './tasks';
import type { TypeOfBoards } from '../types/Board'
import type { TypeOfColumns } from '../types/Column'
import type { TypeOfTasks } from '../types/Task'

const reducer: Reducer<{boards: TypeOfBoards, columns: TypeOfColumns, tasks: TypeOfTasks}> = combineReducers({
  boards,
  columns,
  tasks,
})

export default reducer