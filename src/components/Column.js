import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from '../components/ColumnItem';

class Column extends React.Component {
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
    const {columnNumber, columnState, actions} = this.props;
    return (
      <div className="column">
        { columnState.isTitleEditable 
          ? <form onSubmit={() => actions.onClickColumnTitle(columnNumber)}>
            <input className="column__title"
              onBlur={() => actions.onClickColumnTitle(columnNumber)}
              onChange={event => actions.onChangeColumnTitle(columnNumber, event.target.value)}
              value={columnState.columnTitle}
              ref={this.focused}
            />
          </form>
          : <span className="column__title"
            onClick={() => actions.onClickColumnTitle(columnNumber)}
          >{columnState.columnTitle}</span>
        }
        <form className="column__form" onSubmit={(event) => actions.onSubmitTask(columnNumber,columnState.inputValue,event)}>
          <input className="column__input" value={columnState.inputValue} onChange={event => actions.onInputTask(columnNumber, event.target.value)} />
          <button className="column__submit-button" type="submit">+</button>
        </form>
        <ul className="column__list">
          { columnState.tasks.map( (task, index) => {
            return (
              <ColumnItem key={index}
                taskName={task.name}
                isDone={task.isDone}
                isHovered={task.isHovered}
                isTaskEditable={task.isTaskEditable}
                onClick={() => actions.onItemClick(columnNumber,index)}
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

Column.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  columnState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Column;