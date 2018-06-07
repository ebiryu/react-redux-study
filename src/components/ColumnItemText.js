// @flow

import React, * as ReactTypes from 'react';

type Props = {
  isTaskEditable: boolean,
  onEditItem: Function,
  onBlurItem: Function,
  taskName: string,
}

class ColumnItemText extends React.Component<Props> {
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
    const {isTaskEditable, onEditItem, onBlurItem, taskName} = this.props
    return (isTaskEditable)
      ? <form onSubmit={onBlurItem}>
        <input className="column__item-text" onChange={onEditItem} onBlur={onBlurItem} value={taskName} ref={this.focused}/>
      </form>
      : <span className="column__item-text">{taskName}</span>
  }
}

export default ColumnItemText;