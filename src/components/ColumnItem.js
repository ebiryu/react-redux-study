import React from 'react';
import PropTypes from 'prop-types';

const ColumnItem = ({n, isDone, onClick}) => {
  const classIsDone = isDone ? "column__item--done" : "";
  return <li className={`column__item ${classIsDone}`} onClick={onClick}>{n}</li>
}

ColumnItem.propTypes = {
  n: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ColumnItem;