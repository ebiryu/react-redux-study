// @flow

import React, * as ReactTypes from 'react';

type Props = {
  isTitleEditable: boolean,
  onClickColumnTitle: Function,
  editColumnTitle: Function,
  columnTitle: string,
}

class ColumnTitle extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.focused = React.createRef();
  }
  focused: { current: null | ReactTypes.ElementRef<'input'> }
  componentDidUpdate() {
    if (this.focused.current) {
      this.focused.current.focus();
    }
  }
  render() {
    const {isTitleEditable, onClickColumnTitle, editColumnTitle, columnTitle} = this.props;
    return isTitleEditable 
      ? 
      <form onSubmit={onClickColumnTitle}>
        <input className="column__title"
          onBlur={onClickColumnTitle}
          onChange={event => editColumnTitle(event.target.value)}
          value={columnTitle}
          ref={this.focused}
        />
      </form>
      : 
      <span className="column__title" onClick={onClickColumnTitle}>
        {columnTitle}
      </span>
      
  }
}

export default ColumnTitle;