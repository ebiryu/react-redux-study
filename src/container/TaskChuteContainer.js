import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends Component {
  render() {
    return (
      <div className="body">
        <div className="task-chute">
          <div className="column">
            <div>title</div>
            <ul className="item-list">
              <li className="item">ひとつめ</li>
              <li className="item">ふたつめ</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

// const mapState = (state, ownProps) => ({
//   calculator: state.calculator,
// })

// const mapDispatch = (dispatch) => ({
//   actions: bindActionCreators(actions, dispatch),
// })

// export default connect(mapState,mapDispatch)(CalculatorContainer);
export default TaskChuteContainer;