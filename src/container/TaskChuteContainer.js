// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Link } from 'react-router-dom';

import ActiveBoard from '../components/ActiveBoard';
import BoardList from '../components/BoardList';
import actions from '../actions';
import '../css/main.css';
import type { TypeOfBoards } from '../types/Board';
import type { TypeOfColumns } from '../types/Column';
import type { TypeOfTasks } from '../types/Task';

type Props = {
  boards: TypeOfBoards,
  columns: TypeOfColumns,
  tasks: TypeOfTasks,
  actions: typeof actions,
}

class TaskChuteContainer extends React.Component<Props> {
  render() {
    const { boards, columns, tasks, actions } = this.props;
    return (
      <div className="vertical-layout">
        <div className="header">
          <div></div>
          <Link to="/"><div className="header__center" onClick={actions.backToBoardList}>Home</div></Link>
          <div></div>
        </div>
        <div className="content">
          <Switch>
            <Route 
              path="/board-:boardname"
              render={({ match }) => {
                if (boards.byId[match.params.boardname] !== undefined) {
                  return <ActiveBoard activeBoard={boards.byId[match.params.boardname]} columns={columns} tasks={tasks} actions={actions} />
                } else {
                  return <div className="task-chute">そのようなboardは存在しません。</div>
                }
              }}
            />
            <Route
              exact
              path="/"
              render={() => <BoardList boards={boards} actions={actions}/>}
            />
          </Switch>
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  columns: state.columns,
  tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskChuteContainer);