import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from '../components/ColumnItem';
import ColumnTitle from './ColumnTitle';
import NewTaskInput from './NewTaskInput';

class Column extends React.Component {
  render() {
    const {boardNumber, columnNumber, columnState, actions} = this.props;
    return (
      <div className="column">
        <ColumnTitle
          columnTitle={columnState.columnTitle}
          isTitleEditable={columnState.isTitleEditable}
          onClickColumnTitle={() => actions.enableEditingColumnTitle(boardNumber, columnNumber)}
          editColumnTitle={(inputString) => actions.updateEditingColumnTitle(boardNumber, columnNumber, inputString)}
        />
        <NewTaskInput
          inputValue={columnState.inputValue}
          onInputTask={(inputString) => actions.updateInputTask(boardNumber, columnNumber, inputString)}
          onSubmitTask={(inputString) => actions.createNewTask(boardNumber, columnNumber, inputString)}
        />
        <ul className="column__list">
          { columnState.tasks.map( (task, index) => {
            return (
              <ColumnItem key={index}
                taskName={task.name}
                isDone={task.isDone}
                isHovered={task.isHovered}
                isTaskEditable={task.isTaskEditable}
                onClick={() => actions.doSingleTask(boardNumber, columnNumber, index)}
                onMouseEnter={() => actions.showEditButton(boardNumber, columnNumber, index)}
                onMouseLeave={() => actions.hideEditButton(boardNumber, columnNumber, index)}
                onClickEditItem={() => actions.enableEditingTask(boardNumber, columnNumber, index)}
                onBlurItem={() => actions.disableEditingTask(boardNumber, columnNumber, index)}
                onEditItem={event => actions.updateEditingTask(boardNumber, columnNumber, index, event.target.value)}
              />
            )
          }) }
        </ul>
      </div>
    );
  }
}

Column.propTypes = {
  boardNumber: PropTypes.number.isRequired,
  columnNumber: PropTypes.number.isRequired,
  columnState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Column;