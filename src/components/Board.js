import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

class Board extends React.Component {
  render() {
    const { columns, actions } = this.props
    return (
      <div className="task-chute">
        <div className="column-master">
          { columns.map( (column, index) => {
            return <Column key={index} columnNumber={index} columnState={columns[index]} actions={actions} />
          }) }
          <div className="column column__empty--next" onClick={actions.addNewColumn}>
            <div className="column__title--next">add column</div>
          </div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  columns: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default Board;