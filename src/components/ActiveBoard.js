import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

class ActiveBoard extends React.Component {
  render() {
    const { boards, columns, actions } = this.props
    return (
      <div className="task-chute">
        <div className="column-master">
          { boards.byId[boards.currentId].columns.map( (columnId, index) => {
            return <Column key={index} boardNumber={boards.currentBoard} columnNumber={columnId} columnState={columns.byId[columnId]} actions={actions} />
          }) }
          <div className="column column__empty--next" onClick={() => actions.createNewColumn(boards.currentBoard)}>
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
  actions: PropTypes.object.isRequired,
}

export default ActiveBoard;