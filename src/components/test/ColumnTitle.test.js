import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ColumnTitle from '../ColumnTitle'

Enzyme.configure({ adapter: new Adapter })

describe('Column Title ', () => {
  let testFn

  beforeEach(() => {
    testFn = jest.fn()
  })

  it('子コンポーネントが存在すること(not editable)', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={false}/>)
    expect(columnTitle.find('span')).toHaveLength(1)
    expect(columnTitle.find('form')).toHaveLength(0)
  })
  it('子コンポーネントが存在すること(editable)', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={true}/>)
    expect(columnTitle.find('span')).toHaveLength(0)
    expect(columnTitle.find('form')).toHaveLength(1)
  })
  it('初期値 (expected "title")', () => {
    const columnTitle = shallow(<ColumnTitle columnTitle={'title'}/>)
    expect(columnTitle.text()).toEqual('title')
  })
  it('クリック時', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={false} onClickColumnTitle={testFn}/>)
    columnTitle.find('span').simulate('click')
    // クリックしても'span'のまま。reduxには影響しない模様。
    expect(columnTitle.find('span').exists()).toBe(true)
    expect(testFn).toHaveBeenCalled()
  })
  it('submit時', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={true} onClickColumnTitle={testFn}/>)
    columnTitle.find('form').simulate('submit')
    expect(testFn).toHaveBeenCalled()
  })
  it('blur時', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={true} onClickColumnTitle={testFn}/>)
    columnTitle.find('input').simulate('blur')
    expect(testFn).toHaveBeenCalled()
  })
  it('titleを入力時', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={true} editColumnTitle={testFn}/>)
    columnTitle.find('input').simulate('change', {target: {value: '7'}})
    expect(testFn).toHaveBeenCalled()
  })
  it('autofocus', () => {
    const columnTitle = mount(<ColumnTitle isTitleEditable={true}/>)
    const { focused } = columnTitle.instance()
    jest.spyOn(focused.current, 'focus')

    columnTitle.instance().componentDidUpdate()
    expect(focused.current.focus).toHaveBeenCalledTimes(1)
  })

  it('snapshot', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={true} onClickColumnTitle={testFn}/>)
    expect(columnTitle).toMatchSnapshot()
  })
})