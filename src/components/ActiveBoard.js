import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

class ActiveBoard extends React.Component {
  addNewColumnToBoard(actions, currentBoardId, newColumnId) {
    actions.createNewColumn(newColumnId)
    actions.registerNewColumnToBoard(currentBoardId, newColumnId)
  }
  render() {
    const { boards, columns, tasks, actions } = this.props
    return (
      <div className="task-chute">
        <div className="column-master">
          { boards.byId[boards.currentId].columns.map( (columnId, index) => (
            <Column key={index}
              columnId={columnId}
              columnState={columns.byId[columnId]}
              tasks={tasks}
              actions={actions}
            />
          )) }
          <div
            className="column column__empty--next"
            onClick={() => this.addNewColumnToBoard(actions, boards.currentId, `column${columns.allIds.length}`)}
          >
            <div className="column__title--next">add column</div>
          </div>
        </div>
      </div>
    );
  }
}

ActiveBoard.propTypes = {
  boards: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  tasks: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default ActiveBoard;