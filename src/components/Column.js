import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from '../components/ColumnItem';
import ColumnTitle from './ColumnTitle';
import NewTaskInput from './NewTaskInput';

class Column extends React.Component {
  addNewTaskToColumn(actions, columnId, newTaskId, newTaskName) {
    actions.createNewTask(newTaskId, newTaskName)
    actions.registerNewTaskToColumn(columnId, newTaskId)
  }
  render() {
    const {columnState, tasks, actions} = this.props
    const columnId = columnState.id
    return (
      <div className="column">
        <ColumnTitle
          columnTitle={columnState.name}
          isTitleEditable={columnState.isTitleEditable}
          onClickColumnTitle={() => actions.enableEditingColumnTitle(columnId)}
          editColumnTitle={(inputString) => actions.updateEditingColumnTitle(columnId, inputString)}
        />
        <NewTaskInput
          inputValue={columnState.inputValue}
          onInputTask={(inputString) => actions.updateInputTask(columnId, inputString)}
          onSubmitTask={(inputString) => this.addNewTaskToColumn(actions, columnId, `task${tasks.allIds.length + 1}`, inputString)}
        />
        <ul className="column__list">
          { columnState.tasks.map( (taskId, index) => {
            return (
              <ColumnItem key={index}
                taskName={tasks.byId[taskId].name}
                isDone={tasks.byId[taskId].isDone}
                isHovered={tasks.byId[taskId].isHovered}
                isTaskEditable={tasks.byId[taskId].isTaskEditable}
                onClick={() => actions.doSingleTask(taskId)}
                onMouseEnter={() => actions.showEditButton(taskId)}
                onMouseLeave={() => actions.hideEditButton(taskId)}
                onClickEditItem={() => actions.enableEditingTask(taskId)}
                onBlurItem={() => actions.disableEditingTask(taskId)}
                onEditItem={event => actions.updateEditingTask(taskId, event.target.value)}
              />
            )
          }) }
        </ul>
      </div>
    );
  }
}

Column.propTypes = {
  columnState: PropTypes.object.isRequired,
  tasks: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Column;