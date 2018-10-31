import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Loader from './index'

describe('<Error>', () => {
  it('should render', () => {
    expect(shallowToJson(shallow(<Loader />))).toMatchSnapshot()
  })
})
