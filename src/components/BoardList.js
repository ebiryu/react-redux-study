import React from 'react';
import PropTypes from 'prop-types';

class BoardList extends React.Component {
  render() {
    const { boards, actions } = this.props;
    return(
      <ul>
        { Object.keys(boards.byId).map( (boardId, index) => {
          return <li key={index} onClick={() => actions.openSelectedBoard(boardId)}>{boards.byId[boardId].name}</li>
        })}
      </ul>
    );
  }
}

BoardList.propTypes = {
  boards: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default BoardList;