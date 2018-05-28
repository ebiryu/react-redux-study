import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import ColumnItem from '../components/ColumnItem';
import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends React.Component {
  render() {
    const { items } = this.props.state;
    return (
      <div className="body">
        <div className="task-chute">
          <div className="column">
            <div className="column__title">title</div>
            <input className="column__input" />
            <ul className="column__list">
              { items.map( (item, index) => {
                return <ColumnItem key={index} n={item.name} isDone={item.isDone} />
              }) }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

TaskChuteContainer.propTypes = {
  state: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskChuteContainer);