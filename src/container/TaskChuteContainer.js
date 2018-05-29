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
          <div className="column column__empty"></div>
          <div className="column">
            <div className="column__title">title</div>
            <form className="column__form" onSubmit={(event) => actions.onSubmitTask(column.inputValue,event)}>
              <input className="column__input" value={column.inputValue} onChange={event => actions.onInputTask(event)} />
              <button className="column__submit-button" type="submit">+</button>
            </form>
            <ul className="column__list">
              { column.tasks.map( (task, index) => {
                return <ColumnItem key={index} n={task.name} isDone={task.isDone} onClick={() => actions.onItemClick(index)} />
              }) }
            </ul>
          </div>
          <div className="column column__empty--next">
            <div className="column__title--next">add column</div>
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