// @flow

export type TypeOfColumn = {
  +id: string,
  +name: string,
  +isTitleEditable: boolean,
  +inputValue: string,
  +tasks: Array<string>,
}

export type TypeOfColumns = {
  +byId: {
    +[id: string]: TypeOfColumn,
  }
}

export type ColumnAction = {
  +type: string,
  +columnId?: string,
  +newTaskId?: string,
  +inputTask?: string,
  +newColumnId?: string,
  +changedColumnTitle?: string,
}