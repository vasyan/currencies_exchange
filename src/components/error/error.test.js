import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Error from './index'

describe('<Error>', () => {
  it('should render', () => {
    const props = {
      onClick: jest.fn()
    }

    expect(shallowToJson(shallow(<Error {...props} />))).toMatchSnapshot()
  })

  it('should call passed handler on click to "try again"', () => {
    const props = {
      onClick: jest.fn()
    }
    const wrapper = shallow(<Error {...props} />)

    wrapper.find('.try_again').simulate('click')

    expect(props.onClick).toHaveBeenCalled()
  })
})
