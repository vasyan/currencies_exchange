import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CurrencySelect from './index'

describe('<CurrencySelect>', () => {
  it('should render', () => {
    const props = {
      currencyName: '__CURRENCY_NAME__',
      children: <span>this is child</span>
    }
    expect(
      shallowToJson(shallow(<CurrencySelect {...props} />))
    ).toMatchSnapshot()
  })

  it('should handle the next/prev click', () => {
    const props = {
      onPrev: jest.fn(),
      onNext: jest.fn()
    }

    const wrapper = shallow(<CurrencySelect {...props} />)

    wrapper.find('.icon_prev').simulate('click')
    wrapper.find('.icon_next').simulate('click')
    expect(props.onPrev).toHaveBeenCalled()
    expect(props.onNext).toHaveBeenCalled()
  })
})
