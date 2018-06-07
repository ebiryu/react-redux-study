// @flow

import React from 'react'

type Props = {
  inputValue: string,
  onInputTask: Function,
  onSubmitTask: Function,
}

const NewTaskInput = ({inputValue, onInputTask, onSubmitTask}: Props) => {
  const submitTask = (e: {preventDefault: Function}, inputValue: string) => {
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

export default NewTaskInput;