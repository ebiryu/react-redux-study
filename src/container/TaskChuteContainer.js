import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends Component {
  render() {
    return (
      <div className="body">
        <div className="task-chute">
          <div className="column">
            <div className="column__title">title</div>
            <input className="column__input" />
            <ul className="column__list">
              <li className="column__item">ひとつめ</li>
              <li className="column__item">ふたつめ</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({
  ...state
})

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapState,mapDispatch)(TaskChuteContainer);