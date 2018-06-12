// @flow

import type { ExtractReturn } from './Function'
import * as boardActions from '../actions/boards'

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

export type BoardActions =
  | ExtractReturn<typeof boardActions.openSelectedBoard>
  | ExtractReturn<typeof boardActions.backToBoardList>
  | ExtractReturn<typeof boardActions.createNewBoard>
  | ExtractReturn<typeof boardActions.registerNewColumnToBoard>