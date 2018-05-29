import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Column from '../components/Column';
import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends React.Component {
  render() {
    const { column, actions } = this.props;
    return (
      <div className="body">
        <div className="task-chute">
          <div className="column column__empty"></div>
          <Column key={0} columnNumber={0} columnState={column[0]} actions={actions}/>
          <Column key={1} columnNumber={1} columnState={column[1]} actions={actions}/>
          <div className="column column__empty--next">
            <div className="column__title--next">add column</div>
          </div>
        </div>
      </div>
    )
  }
}

TaskChuteContainer.propTypes = {
  column: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  column: state.column,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskChuteContainer);