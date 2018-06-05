import { combineReducers } from 'redux';
import boards from './boards';
import columns from './columns';
import tasks from './tasks';

const reducer = combineReducers({
  boards,
  columns,
  tasks,
})

export default reducer