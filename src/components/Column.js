import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from '../components/ColumnItem';

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
                onClick={() => actions.onClickTask(columnNumber,index)}
                onMouseEnter={() => actions.onMouseEnterItem(columnNumber,index)}
                onMouseLeave={() => actions.onMouseLeaveItem(columnNumber,index)}
                onClickEditItem={() => actions.onClickEditItem(columnNumber,index)}
                onBlurItem={() => actions.onBlurItem(columnNumber,index)}
                onEditItem={event => actions.onEditItem(columnNumber,index,event.target.value)}
              />
            )
          }) }
        </ul>
      </div>
    );
  }
}

class ColumnTitle extends React.Component {
  constructor(props) {
    super(props);
    this.focused = React.createRef();
  }
  componentDidUpdate() {
    if (this.focused.current) {
      this.focused.current.focus();
    }
  }
  render() {
    const {isTitleEditable, columnNumber, onClickColumnTitle, editColumnTitle, columnTitle} = this.props;
    return isTitleEditable 
      ? 
      <form onSubmit={() => onClickColumnTitle(columnNumber)}>
        <input className="column__title"
          onBlur={() => onClickColumnTitle(columnNumber)}
          onChange={event => editColumnTitle(columnNumber, event.target.value)}
          value={columnTitle}
          ref={this.focused}
        />
      </form>
      : 
      <span className="column__title" onClick={() => onClickColumnTitle(columnNumber)}>
        {columnTitle}
      </span>
      
  }
}

const NewTaskInput = ({columnNumber, inputValue, onInputTask, onSubmitTask}) => {
  const submitTask = (e, columnNumber, inputValue) => {
    e.preventDefault();
    onSubmitTask(columnNumber, inputValue);
  };
  return (
    <form className="column__form" onSubmit={() => submitTask(columnNumber, inputValue)}>
      <input className="column__input" value={inputValue} onChange={event => onInputTask(columnNumber, event.target.value)} />
      <button className="column__submit-button" type="submit">+</button>
    </form>
  )
}

Column.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  columnState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

ColumnTitle.propTypes = {
  isTitleEditable: PropTypes.bool.isRequired,
  columnNumber: PropTypes.number.isRequired,
  onClickColumnTitle: PropTypes.func.isRequired,
  editColumnTitle: PropTypes.func.isRequired,
  columnTitle: PropTypes.string.isRequired,
};

NewTaskInput.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputTask: PropTypes.func.isRequired,
  onSubmitTask: PropTypes.func.isRequired,
};

export default Column;