import React from 'react';
import PropTypes from 'prop-types';

class BoardList extends React.Component {
  render() {
    const { boards, actions } = this.props;
    return(
      <ul>
        { boards.allIds.map( (boardId, index) => {
          return <li key={index} onClick={() => actions.openSelectedBoard(index)}>{boards.byId[boardId].name}</li>
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