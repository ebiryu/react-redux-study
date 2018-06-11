// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import typeof actions from '../actions';
import type { TypeOfBoards } from '../types/Board';

type Props = {
  boards: TypeOfBoards,
  actions: actions,
}

class BoardList extends React.Component<Props> {
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

export default BoardList;