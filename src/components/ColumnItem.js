import React from 'react';
import PropTypes from 'prop-types';

const ColumnItem = ({n,isDone}) => {
  if (isDone) {
    return (
      <li className="column__item"><s>{n}</s></li>
    )
  } else {
    return (
      <li className="column__item">{n}</li>
    )
  }
}

ColumnItem.propTypes = {
  n: PropTypes.func.isRequired,
  isDone: PropTypes.func.isRequired,
};

export default ColumnItem;