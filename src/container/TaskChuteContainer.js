import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ColumnItem from '../components/ColumnItem';
import * as actions from '../actions';
import '../css/main.css';

class TaskChuteContainer extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="task-chute">
          <div className="column">
            <div className="column__title">title</div>
            <input className="column__input" />
            <ul className="column__list">
              <ColumnItem n={"ひとつめ"} />
              <ColumnItem n={"ふたつめ"} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskChuteContainer);