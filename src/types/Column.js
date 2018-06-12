// @flow

import type { ExtractReturn } from './Function'
import * as columnActions from '../actions/columns'

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

export type ColumnActions = 
  | ExtractReturn<typeof columnActions.registerNewTaskToColumn>
  | ExtractReturn<typeof columnActions.updateInputTask>
  | ExtractReturn<typeof columnActions.createNewColumn>
  | ExtractReturn<typeof columnActions.updateEditingColumnTitle>
  | ExtractReturn<typeof columnActions.enableEditingColumnTitle>