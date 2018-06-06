import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BoardList extends React.Component {
  render() {
    const { boards, actions } = this.props;
    return(
      <ul>
        { Object.keys(boards.byId).map( (boardId, index) => {
          return (
            <li key={index} onClick={() => actions.openSelectedBoard(boardId)}>
              <Link to={boards.byId[boardId].id}>
                {boards.byId[boardId].name}
              </Link>
            </li>
          )
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