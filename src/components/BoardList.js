import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BoardList extends React.Component {
  render() {
    const { boards, actions } = this.props;
    return(
      <div>
        <ul>
          { Object.keys(boards.byId).map( (boardId, index) => {
            return (
              <li key={index} onClick={() => actions.openSelectedBoard(boardId)}>
                <Link to={`board-${boards.byId[boardId].id}`}>
                  {boards.byId[boardId].name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div
          className='button__add-board'
          onClick={() => actions.createNewBoard(`board${Object.keys(boards.byId).length + 1}`)}
        >create new board</div>
      </div>
    );
  }
}

BoardList.propTypes = {
  boards: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default BoardList;