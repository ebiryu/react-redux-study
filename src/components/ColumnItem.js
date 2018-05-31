import React from 'react';
import PropTypes from 'prop-types';

class ColumnItem extends React.Component {
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
    const {n, isDone, isHovered, isTaskEditable, onClick, onMouseEnter, onMouseLeave, onClickEditItem, onBlurItem, onEditItem} = this.props;
    const classIsDone = isDone ? "column__item--done" : "";
    return (
      <li className="column__li" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={`column__item ${classIsDone}`} onClick={onClick}>
          { (isTaskEditable)
            ? <input className="column__item-text" onChange={onEditItem} onBlur={onBlurItem} value={n} ref={this.focused}/>
            : <span className="column__item-text">{n}</span>
          }
        </div>
        { (isHovered && !isTaskEditable)
          ? <span className="column__item-edit" onClick={onClickEditItem}>✏</span>
          : <span></span>
        }
      </li>
    )
  }
}

ColumnItem.propTypes = {
  n: PropTypes.string.isRequired,
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