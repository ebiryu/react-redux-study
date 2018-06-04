import React from 'react';
import PropTypes from 'prop-types';

const ColumnItemEditButton = ({isHovered, isTaskEditable, onClickEditItem}) => {
  return (isHovered && !isTaskEditable)
    ? <span className="column__item-edit" onClick={onClickEditItem}>✏</span>
    : <span></span>
}

ColumnItemEditButton.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  isTaskEditable: PropTypes.bool.isRequired,
  onClickEditItem: PropTypes.func.isRequired,
};

export default ColumnItemEditButton;