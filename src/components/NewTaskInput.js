import React from 'react';
import PropTypes from 'prop-types';

const NewTaskInput = ({inputValue, onInputTask, onSubmitTask}) => {
  const submitTask = (e, inputValue) => {
    e.preventDefault();
    onSubmitTask(inputValue);
  };
  return (
    <form className="column__form" onSubmit={event => submitTask(event, inputValue)}>
      <input className="column__input" value={inputValue} onChange={event => onInputTask(event.target.value)} />
      <button className="column__submit-button" type="submit">+</button>
    </form>
  )
}

NewTaskInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputTask: PropTypes.func.isRequired,
  onSubmitTask: PropTypes.func.isRequired,
};

export default NewTaskInput;