import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ColumnTitle from '../ColumnTitle'

Enzyme.configure({ adapter: new Adapter })

describe('Column Title ', () => {
  it('子コンポーネントが存在すること(not editable)', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={false}/>)
    expect(columnTitle.find('span').length).toBe(1)
    expect(columnTitle.find('form').length).toBe(0)
  })
  it('子コンポーネントが存在すること(editable)', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={true}/>)
    expect(columnTitle.find('span').length).toBe(0)
    expect(columnTitle.find('form').length).toBe(1)
  })
  it('初期値 (expected "title")', () => {
    const columnTitle = shallow(<ColumnTitle columnTitle={'title'}/>)
    expect(columnTitle.text()).toEqual('title')
  })
  it('クリック時', () => {
    const columnTitle = shallow(<ColumnTitle isTitleEditable={false}/>)
    columnTitle.find('span').simulate('click')
    expect(columnTitle.find('span').exists()).toBe(true)
  })
})