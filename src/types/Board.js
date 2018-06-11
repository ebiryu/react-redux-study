// @flow

export type TypeOfBoard = {
  +id: string,
  +name: string,
  +columns: Array<string>,
}

export type TypeOfBoards = {
  +byId: {
    +[id: string]: TypeOfBoard,
  },
  +currentId: string,
  +isActive: boolean,
}

export type BoardAction = {
  +type: string,
  +boardId?: string,
  +newColumnId?: string,
  +newBoardId?: string,
}