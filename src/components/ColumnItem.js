import React from 'react';
import PropTypes from 'prop-types';
import ColumnItemText from './ColumnItemText';
import ColumnItemEditButton from './ColumnItemEditButton';

const ColumnItem = ({taskName, isDone, isHovered, isTaskEditable, onClick, onMouseEnter, onMouseLeave, onClickEditItem, onBlurItem, onEditItem}) => {
  const classIsDone = isDone ? "column__item--done" : "";
  return (
    <li className="column__li" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={`column__item ${classIsDone}`} onClick={onClick}>
        <ColumnItemText isTaskEditable={isTaskEditable} onEditItem={onEditItem} onBlurItem={onBlurItem} taskName={taskName} />
      </div>
      <ColumnItemEditButton isHovered={isHovered} isTaskEditable={isTaskEditable} onClickEditItem={onClickEditItem} />
    </li>
  )
}

ColumnItem.propTypes = {
  taskName: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  isTaskEditable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClickEditItem: PropTypes.func.isRequired,
  onBlurItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
};

export default ColumnItem;