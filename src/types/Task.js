// @flow

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

export type TaskAction = {
  +type: string,
  +taskId?: string,
  +editString?: string,
  +newTaskId?: string,
  +newTaskName?: string,
}