import React from 'react';
import PropTypes from 'prop-types';

const ColumnItem = ({n}) => {
  return (
    <li className="column__item">{n}</li>
  )
}

ColumnItem.propTypes = {
  n: PropTypes.func.isRequired,
};

export default ColumnItem;