import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from '../components/ColumnItem';
import ColumnTitle from './ColumnTitle';
import NewTaskInput from './NewTaskInput';

class Column extends React.Component {
  addNewTaskToColumn(actions, columnId, newTaskId, newTaskName) {
    actions.createNewTask(columnId, newTaskId, newTaskName)
    actions.registerNewTaskToColumn(columnId, newTaskId)
  }
  render() {
    const {boardId, columnId, columnState, tasks, actions} = this.props
    return (
      <div className="column">
        <ColumnTitle
          columnTitle={columnState.name}
          isTitleEditable={columnState.isTitleEditable}
          onClickColumnTitle={() => actions.enableEditingColumnTitle(boardId, columnId)}
          editColumnTitle={(inputString) => actions.updateEditingColumnTitle(boardId, columnId, inputString)}
        />
        <NewTaskInput
          inputValue={columnState.inputValue}
          onInputTask={(inputString) => actions.updateInputTask(boardId, columnId, inputString)}
          onSubmitTask={(inputString) => this.addNewTaskToColumn(actions, columnId, `task${tasks.allIds.length}`, inputString)}
        />
        <ul className="column__list">
          { columnState.tasks.map( (taskId, index) => {
            return (
              <ColumnItem key={index}
                taskName={tasks.byId[taskId].name}
                isDone={tasks.byId[taskId].isDone}
                isHovered={tasks.byId[taskId].isHovered}
                isTaskEditable={tasks.byId[taskId].isTaskEditable}
                onClick={() => actions.doSingleTask(boardId, columnId, taskId)}
                onMouseEnter={() => actions.showEditButton(boardId, columnId, taskId)}
                onMouseLeave={() => actions.hideEditButton(boardId, columnId, taskId)}
                onClickEditItem={() => actions.enableEditingTask(boardId, columnId, taskId)}
                onBlurItem={() => actions.disableEditingTask(boardId, columnId, taskId)}
                onEditItem={event => actions.updateEditingTask(boardId, columnId, taskId, event.target.value)}
              />
            )
          }) }
        </ul>
      </div>
    );
  }
}

Column.propTypes = {
  boardId: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
  columnState: PropTypes.object.isRequired,
  tasks: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Column;