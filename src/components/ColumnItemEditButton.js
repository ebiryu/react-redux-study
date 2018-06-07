// @flow

import React from 'react';

type Props = {
  isHovered: boolean,
  isTaskEditable: boolean,
  onClickEditItem: Function,
}

const ColumnItemEditButton = ({isHovered, isTaskEditable, onClickEditItem}: Props) => {
  return (isHovered && !isTaskEditable)
    ? <span className="column__item-edit" onClick={onClickEditItem}>✏</span>
    : <span></span>
}

export default ColumnItemEditButton;