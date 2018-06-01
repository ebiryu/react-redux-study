import React from 'react';
import PropTypes from 'prop-types';

const ColumnItem = ({taskName, isDone, isHovered, isTaskEditable, onClick, onMouseEnter, onMouseLeave, onClickEditItem, onBlurItem, onEditItem}) => {
  const classIsDone = isDone ? "column__item--done" : "";
  return (
    <li className="column__li" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={`column__item ${classIsDone}`} onClick={onClick}>
        <ItemText isTaskEditable={isTaskEditable} onEditItem={onEditItem} onBlurItem={onBlurItem} taskName={taskName} />
      </div>
      <EditButton isHovered={isHovered} isTaskEditable={isTaskEditable} onClickEditItem={onClickEditItem} />
    </li>
  )
}

class ItemText extends React.Component {
  constructor(props) {
    super(props);
    this.focused = React.createRef();
  }
  componentDidUpdate() {
    if (this.focused.current) {
      this.focused.current.focus();
    }
  }
  render() {
    const {isTaskEditable, onEditItem, onBlurItem, taskName} = this.props
    return (isTaskEditable)
      ? <form onSubmit={onBlurItem}>
        <input className="column__item-text" onChange={onEditItem} onBlur={onBlurItem} value={taskName} ref={this.focused}/>
      </form>
      : <span className="column__item-text">{taskName}</span>
  }
}

const EditButton = ({isHovered, isTaskEditable, onClickEditItem}) => {
  return (isHovered && !isTaskEditable)
    ? <span className="column__item-edit" onClick={onClickEditItem}>✏</span>
    : <span></span>
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

ItemText.propTypes = {
  isTaskEditable: PropTypes.bool.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onBlurItem: PropTypes.func.isRequired,
  taskName: PropTypes.string.isRequired,
}

EditButton.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  isTaskEditable: PropTypes.bool.isRequired,
  onClickEditItem: PropTypes.func.isRequired,
};

export default ColumnItem;