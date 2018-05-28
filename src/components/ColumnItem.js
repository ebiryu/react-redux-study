import React from 'react';
import PropTypes from 'prop-types';

const ColumnItem = ({n,isDone}) => {
  const classIsDone = isDone ? "column__item--done" : "";
  return <li className={`column__item ${classIsDone}`}>{n}</li>
}

ColumnItem.propTypes = {
  n: PropTypes.func.isRequired,
  isDone: PropTypes.func.isRequired,
};

export default ColumnItem;