import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CurrencySelect from './index'

describe('<CurrencySelect>', () => {
  it('should render', () => {
    const props = {
      children: <span>this is child</span>
    }

    expect(shallowToJson(shallow(<CurrencySelect />))).toMatchSnapshot()
    expect(
      shallowToJson(shallow(<CurrencySelect {...props} />))
    ).toMatchSnapshot()
  })
})
