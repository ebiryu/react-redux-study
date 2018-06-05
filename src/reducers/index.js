import { combineReducers } from 'redux';
import boards from './boards';
import tasks from './tasks';

const reducer = combineReducers({
  boards,
  tasks,
});

export default reducer;