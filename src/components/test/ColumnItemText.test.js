import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ColumnItemText from '../ColumnItemText'

Enzyme.configure({ adapter: new Adapter })

describe('Column item text ', () => {
  let testFn

  beforeEach(() => {
    testFn = jest.fn()
  })

  it('子コンポーネントが存在すること(not editable)', () => {
    const columnItemText = shallow(<ColumnItemText isTaskEditable={false}/>)
    expect(columnItemText.find('span')).toHaveLength(1)
    expect(columnItemText.find('form')).toHaveLength(0)
  })
  it('子コンポーネントが存在すること(editable)', () => {
    const columnItemText = shallow(<ColumnItemText isTaskEditable={true}/>)
    expect(columnItemText.find('span')).toHaveLength(0)
    expect(columnItemText.find('form')).toHaveLength(1)
  })
  it('taskNameの値反映(not editable)', () => {
    const columnItemText = shallow(<ColumnItemText isTaskEditable={false} taskName={'a task'}/>)
    expect(columnItemText.text()).toBe('a task')
  })
  it('taskNameの値反映(editable)', () => {
    const columnItemText = shallow(<ColumnItemText isTaskEditable={true} taskName={'a task'}/>)
    expect(columnItemText.find('input').props().value).toBe('a task')
  })
  it('submit時', () => {
    const columnItemText = shallow(<ColumnItemText isTaskEditable={true} onBlurItem={testFn}/>)
    columnItemText.find('form').simulate('submit')
    expect(testFn).toHaveBeenCalled()
  })
  it('taskを編集時', () => {
    const columnTitle = shallow(<ColumnItemText isTaskEditable={true} onEditItem={testFn}/>)
    columnTitle.find('input').simulate('change', {target: {value: '7'}})
    expect(testFn).toHaveBeenCalled()
  })
})