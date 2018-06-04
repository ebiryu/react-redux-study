import React from 'react';
import PropTypes from 'prop-types';

class BoardList extends React.Component {
  render() {
    const { boards, actions } = this.props;
    console.log(boards.boardList);
    return(
      <ul>
        { boards.boardList.map( (board, index) => {
          return <li key={index}>{board.name}</li>
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