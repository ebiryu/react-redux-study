import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import ActiveBoard from '../components/ActiveBoard';
import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends React.Component {
  render() {
    const { boards, actions } = this.props;
    const { columns } = boards.boardList[boards.whichIsActive];
    return (
      <div className="body">
        { boards.isActive
          ? <ActiveBoard columns={columns} actions={actions} />
          : <br/>
        }
      </div>
    )
  }
}

TaskChuteContainer.propTypes = {
  boards: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  boards: state.boards,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskChuteContainer);