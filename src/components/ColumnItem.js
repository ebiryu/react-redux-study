import React from 'react';
import PropTypes from 'prop-types';

const ColumnItem = ({n, isDone, isHovered, onClick, onMouseEnter, onMouseLeave}) => {
  const classIsDone = isDone ? "column__item--done" : "";
  return (
    <li className={`column__item ${classIsDone}`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="column__item-text">
        <span>{n}</span>
        { (isHovered === true)
          ? <span className="column__item-edit">✏</span>
          : <span></span>
        }
      </div>
    </li>
  )
}

ColumnItem.propTypes = {
  n: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default ColumnItem;