import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Column from '../components/Column';
import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends React.Component {
  render() {
    const { columns, actions } = this.props;
    return (
      <div className="body">
        <div className="task-chute">
          <div className="column-master">
            {/* <div className="column column__empty"></div> */}
            { columns.map( (column, index) => {
              return <Column key={index} columnNumber={index} columnState={columns[index]} actions={actions} />
            }) }
            <div className="column column__empty--next" onClick={actions.createNewColumn}>
              <div className="column__title--next">add column</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TaskChuteContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  columns: state.columns,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskChuteContainer);