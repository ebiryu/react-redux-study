import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ColumnTitle from '../ColumnTitle'

Enzyme.configure({ adapter: new Adapter })

describe('Column Title ', () => {
  it('', () => {
    const columnTitle = shallow(<ColumnTitle />)
    expect(columnTitle)
  })
})