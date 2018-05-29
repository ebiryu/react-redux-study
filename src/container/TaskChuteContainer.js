import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import ColumnItem from '../components/ColumnItem';
import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends React.Component {
  render() {
    const { column, actions } = this.props;
    return (
      <div className="body">
        <div className="task-chute">
          <div className="column">
            <div className="column__title">title</div>
            <form className="column__form" onSubmit={(event) => actions.onSubmitTask('test_value',event)}>
              <input className="column__input" />
              <button className="column__submit-button" type="submit">+</button>
            </form>
            <ul className="column__list">
              { column.tasks.map( (task, index) => {
                return <ColumnItem key={index} n={task.name} isDone={task.isDone} onClick={() => actions.onItemClick(index)} />
              }) }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

TaskChuteContainer.propTypes = {
  column: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  column: state.column,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskChuteContainer);