import React from 'react';
import PropTypes from 'prop-types';

class ColumnTitle extends React.Component {
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
    const {isTitleEditable, columnNumber, onClickColumnTitle, editColumnTitle, columnTitle} = this.props;
    return isTitleEditable 
      ? 
      <form onSubmit={() => onClickColumnTitle(columnNumber)}>
        <input className="column__title"
          onBlur={() => onClickColumnTitle(columnNumber)}
          onChange={event => editColumnTitle(columnNumber, event.target.value)}
          value={columnTitle}
          ref={this.focused}
        />
      </form>
      : 
      <span className="column__title" onClick={() => onClickColumnTitle(columnNumber)}>
        {columnTitle}
      </span>
      
  }
}

ColumnTitle.propTypes = {
  isTitleEditable: PropTypes.bool.isRequired,
  columnNumber: PropTypes.number.isRequired,
  onClickColumnTitle: PropTypes.func.isRequired,
  editColumnTitle: PropTypes.func.isRequired,
  columnTitle: PropTypes.string.isRequired,
};

export default ColumnTitle;