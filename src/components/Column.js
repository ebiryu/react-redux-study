import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from '../components/ColumnItem';
import ColumnTitle from './ColumnTitle';
import NewTaskInput from './NewTaskInput';

class Column extends React.Component {
  render() {
    const {columnNumber, columnState, actions} = this.props;
    return (
      <div className="column">
        <ColumnTitle
          columnTitle={columnState.columnTitle}
          isTitleEditable={columnState.isTitleEditable}
          columnNumber={columnNumber}
          onClickColumnTitle={actions.onClickColumnTitle}
          editColumnTitle={actions.editColumnTitle}
        />
        <NewTaskInput
          columnNumber={columnNumber}
          inputValue={columnState.inputValue}
          onInputTask={actions.onInputTask}
          onSubmitTask={actions.onSubmitTask}
        />
        <ul className="column__list">
          { columnState.tasks.map( (task, index) => {
            return (
              <ColumnItem key={index}
                taskName={task.name}
                isDone={task.isDone}
                isHovered={task.isHovered}
                isTaskEditable={task.isTaskEditable}
                onClick={() => actions.onClickTask(columnNumber, index)}
                onMouseEnter={() => actions.onMouseEnterItem(columnNumber, index)}
                onMouseLeave={() => actions.onMouseLeaveItem(columnNumber, index)}
                onClickEditItem={() => actions.onClickEditItem(columnNumber, index)}
                onBlurItem={() => actions.onBlurItem(columnNumber, index)}
                onEditItem={event => actions.onEditItem(columnNumber, index, event.target.value)}
              />
            )
          }) }
        </ul>
      </div>
    );
  }
}

Column.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  columnState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Column;