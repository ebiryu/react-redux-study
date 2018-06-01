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
    const { columns } = boards[0];
    return (
      <div className="body">
        <ActiveBoard columns={columns} actions={actions} />
      </div>
    )
  }
}

TaskChuteContainer.propTypes = {
  boards: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  boards: state.boards,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskChuteContainer);