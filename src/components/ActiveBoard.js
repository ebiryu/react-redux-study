import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

class ActiveBoard extends React.Component {
  render() {
    const { boardNumber, columns, actions } = this.props
    return (
      <div className="task-chute">
        <div className="column-master">
          { columns.map( (column, index) => {
            return <Column key={index} boardNumber={boardNumber} columnNumber={index} columnState={columns[index]} actions={actions} />
          }) }
          <div className="column column__empty--next" onClick={() => actions.createNewColumn(boardNumber)}>
            <div className="column__title--next">add column</div>
          </div>
        </div>
      </div>
    );
  }
}

ActiveBoard.propTypes = {
  boardNumber: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default ActiveBoard;