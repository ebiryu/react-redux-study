// @flow

import React from 'react';
import Column from './Column';
import typeof actions from '../actions';
import type { TypeOfBoard } from '../reducers/boards'

type Props = {
  activeBoard: TypeOfBoard,
  columns: {
    byId: {
      [id: string]: {
        id: string,
        name: string,
        isTitleEditable: boolean,
        inputValue: string,
        tasks: Array<string>,
      },
    },
  },
  tasks: {
    byId: {
      [id: string]: {
        id: string,
        name: string,
        isDone: boolean,
        isHovered: boolean,
        isTaskEditable: boolean,
      },
    },
  },
  actions: actions,
}

class ActiveBoard extends React.Component<Props> {
  addNewColumnToBoard(actions: actions, currentBoardId: string, newColumnId: string) {
    actions.createNewColumn(newColumnId)
    actions.registerNewColumnToBoard(currentBoardId, newColumnId)
  }
  render() {
    const { activeBoard, columns, tasks, actions } = this.props
    return (
      <div className="task-chute">
        <div className="column-master">
          { activeBoard.columns.map( (columnId, index) => (
            <Column key={index}
              columnState={columns.byId[columnId]}
              tasks={tasks}
              actions={actions}
            />
          )) }
          <div
            className="column column__empty--next"
            onClick={() => this.addNewColumnToBoard(actions, activeBoard.id, `column${Object.keys(columns.byId).length + 1}`)}
          >
            <div className="column__title--next">add column</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveBoard;