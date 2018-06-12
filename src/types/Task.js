// @flow

import type { ExtractReturn } from './Function'
import * as taskActions from '../actions/tasks'

type TypeOfTask = {
  +id: string,
  +name: string,
  +isDone: boolean,
  +isHovered: boolean,
  +isTaskEditable: boolean,
}

export type TypeOfTasks = {
  +byId: {
    +[id: string]: TypeOfTask,
  }
}

export type TaskActions = 
  | ExtractReturn<typeof taskActions.createNewTask>
  | ExtractReturn<typeof taskActions.disableEditingTask>
  | ExtractReturn<typeof taskActions.doSingleTask>
  | ExtractReturn<typeof taskActions.enableEditingTask>
  | ExtractReturn<typeof taskActions.hideEditButton>
  | ExtractReturn<typeof taskActions.showEditButton>
  | ExtractReturn<typeof taskActions.updateEditingTask>