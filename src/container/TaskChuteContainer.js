import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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
          <div className="header__center" onClick={actions.backToBoardList}>Home</div>
          <div></div>
        </div>
        <div className="content">
          { boards.isActive
            ? <ActiveBoard activeBoard={boards.byId[boards.currentId]} columns={columns} tasks={tasks} actions={actions} />
            : <BoardList boards={boards} actions={actions}/>
          }
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