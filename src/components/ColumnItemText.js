import React from 'react';
import PropTypes from 'prop-types';

class ColumnItemText extends React.Component {
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

ColumnItemText.propTypes = {
  isTaskEditable: PropTypes.bool.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onBlurItem: PropTypes.func.isRequired,
  taskName: PropTypes.string.isRequired,
}

export default ColumnItemText;