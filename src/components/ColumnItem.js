// @flow

import React from 'react';
import classNames from 'classnames';
import ColumnItemText from './ColumnItemText';
import ColumnItemEditButton from './ColumnItemEditButton';

type Props = {
  taskName: string,
  isDone: boolean,
  isHovered: boolean,
  isTaskEditable: boolean,
  onClick: Function,
  onMouseEnter: Function,
  onMouseLeave: Function,
  onClickEditItem: Function,
  onBlurItem: Function,
  onEditItem: Function,
}

const ColumnItem = ({taskName, isDone, isHovered, isTaskEditable, onClick, onMouseEnter, onMouseLeave, onClickEditItem, onBlurItem, onEditItem}: Props) => {
  const taskClass = classNames({
    'column__item': true,
    'column__item--done': isDone,
  })
  return (
    <li className="column__li" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={taskClass} onClick={onClick}>
        <ColumnItemText isTaskEditable={isTaskEditable} onEditItem={onEditItem} onBlurItem={onBlurItem} taskName={taskName} />
      </div>
      <ColumnItemEditButton isHovered={isHovered} isTaskEditable={isTaskEditable} onClickEditItem={onClickEditItem} />
    </li>
  )
}

export default ColumnItem;