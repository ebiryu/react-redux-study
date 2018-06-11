// @flow

import React from 'react';
import ColumnItem from '../components/ColumnItem';
import ColumnTitle from './ColumnTitle';
import NewTaskInput from './NewTaskInput';
import typeof actions from '../actions';
import type { TypeOfColumn } from '../types/Column'
import type { TypeOfTasks } from '../types/Task'

type Props = {
  columnState: TypeOfColumn,
  tasks: TypeOfTasks,
  actions: actions,
}

class Column extends React.Component<Props> {
  addNewTaskToColumn(actions: actions, columnId: string, newTaskId: string, newTaskName: string) {
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
          onSubmitTask={(inputString) => this.addNewTaskToColumn(actions, columnId, `task${Object.keys(tasks.byId).length + 1}`, inputString)}
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

export default Column;