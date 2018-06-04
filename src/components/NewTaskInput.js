import React from 'react';
import PropTypes from 'prop-types';

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

NewTaskInput.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputTask: PropTypes.func.isRequired,
  onSubmitTask: PropTypes.func.isRequired,
};

export default NewTaskInput;