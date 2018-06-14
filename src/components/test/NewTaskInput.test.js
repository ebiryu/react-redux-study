import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewTaskInput from '../NewTaskInput'

Enzyme.configure({ adapter: new Adapter })

describe('New task input ', () => {
  let testFn
  let testFn2

  beforeEach(() => {
    testFn = jest.fn()
    testFn2 = jest.fn()
  })

  it('submit時', () => {
    const newTaskInput = shallow(<NewTaskInput onSubmitTask={testFn}/>)
    newTaskInput.find('form').simulate('submit', {preventDefault: testFn2})
    expect(testFn).toHaveBeenCalled()
    expect(testFn2).toHaveBeenCalled()
  })
  it('input時', () => {
    const newTaskInput = shallow(<NewTaskInput onInputTask={testFn}/>)
    newTaskInput.find('input').simulate('change', {target: {value: '7'}})
    expect(testFn).toHaveBeenCalled()
  })
  it('new task入力時', () => {
    const newTaskInput = shallow(<NewTaskInput inputValue={'new task'}/>)
    expect(newTaskInput.find('input').props().value).toBe('new task')
  })
})