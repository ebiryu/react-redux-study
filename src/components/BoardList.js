import React from 'react';
import PropTypes from 'prop-types';

class BoardList extends React.Component {
  render() {
    const { boards, actions } = this.props;
    return(
      <ul>
        { boards.boardList.map( (board, index) => {
          return <li key={index} onClick={() => actions.onClickBoardListItem(index)}>{board.name}</li>
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