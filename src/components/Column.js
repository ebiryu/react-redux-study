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
          onClickColumnTitle={actions.enableEditingColumnTitle}
          editColumnTitle={actions.updateEditingColumnTitle}
        />
        <NewTaskInput
          columnNumber={columnNumber}
          inputValue={columnState.inputValue}
          onInputTask={actions.updateInputTask}
          onSubmitTask={actions.createNewTask}
        />
        <ul className="column__list">
          { columnState.tasks.map( (task, index) => {
            return (
              <ColumnItem key={index}
                taskName={task.name}
                isDone={task.isDone}
                isHovered={task.isHovered}
                isTaskEditable={task.isTaskEditable}
                onClick={() => actions.doSingleTask(columnNumber, index)}
                onMouseEnter={() => actions.showEditButton(columnNumber, index)}
                onMouseLeave={() => actions.hideEditButton(columnNumber, index)}
                onClickEditItem={() => actions.enableEditingTask(columnNumber, index)}
                onBlurItem={() => actions.disableEditingTask(columnNumber, index)}
                onEditItem={event => actions.updateEditingTask(columnNumber, index, event.target.value)}
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