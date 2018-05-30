import React from 'react';
import PropTypes from 'prop-types';
import ColumnItem from '../components/ColumnItem';

const Column = ({columnNumber, columnState, actions}) => (
  <div className="column">
    <input className="column__title"
      onFocus={() => actions.onClickColumnTitle(columnNumber)}
      onBlur={() => actions.onClickColumnTitle(columnNumber)}
      onChange={event => actions.onChangeColumnTitle(columnNumber,event)}
      value={columnState.columnTitle}
    />
    <form className="column__form" onSubmit={(event) => actions.onSubmitTask(columnNumber,columnState.inputValue,event)}>
      <input className="column__input" value={columnState.inputValue} onChange={event => actions.onInputTask(columnNumber,event)} />
      <button className="column__submit-button" type="submit">+</button>
    </form>
    <ul className="column__list">
      { columnState.tasks.map( (task, index) => {
        return <ColumnItem key={index} n={task.name} isDone={task.isDone} onClick={() => actions.onItemClick(columnNumber,index)} />
      }) }
    </ul>
  </div>
);

Column.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  columnState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Column;