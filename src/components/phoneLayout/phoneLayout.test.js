import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import PhoneLayout from './index'

describe('<PhoneLayout>', () => {
  it('should render', () => {
    expect(shallowToJson(shallow(<PhoneLayout />))).toMatchSnapshot()
  })
})
