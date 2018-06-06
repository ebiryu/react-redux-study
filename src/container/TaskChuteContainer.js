import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';

import ActiveBoard from '../components/ActiveBoard';
import BoardList from '../components/BoardList';
import actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends React.Component {
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
              path="/:boardname"
              render={({ match }) => 
                <ActiveBoard activeBoard={boards.byId[match.params.boardname]} columns={columns} tasks={tasks} actions={actions} />
              }
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

TaskChuteContainer.propTypes = {
  boards: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  tasks: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
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