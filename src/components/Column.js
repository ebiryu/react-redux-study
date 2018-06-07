// @flow

import React from 'react';
import ColumnItem from '../components/ColumnItem';
import ColumnTitle from './ColumnTitle';
import NewTaskInput from './NewTaskInput';

type Actions = {
  createNewTask: Function,
  registerNewTaskToColumn: Function,
  enableEditingColumnTitle: Function,
  updateEditingColumnTitle: Function,
  updateInputTask: Function,
  doSingleTask: Function,
  showEditButton: Function,
  hideEditButton: Function,
  enableEditingTask: Function,
  disableEditingTask: Function,
  updateEditingTask: Function,
}

type Props = {
  columnState: {
    id: string,
    name: string,
    isTitleEditable: boolean,
    inputValue: string,
    tasks: Array<string>,
  },
  tasks: {
    byId: {
      [id: string]: {
        id: string,
        name: string,
        isDone: boolean,
        isHovered: boolean,
        isTaskEditable: boolean,
      },
    },
  },
  actions: Actions,
}

class Column extends React.Component<Props> {
  addNewTaskToColumn(actions: Actions, columnId: string, newTaskId: string, newTaskName: string) {
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