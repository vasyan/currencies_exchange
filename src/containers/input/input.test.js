import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import Input from './index'

jest.mock('utils/getFieldStyles', () =>
  jest.fn().mockImplementation(() => ({ fontSize: 42 }))
)

describe('<Input>', () => {
  const store = configureMockStore()({
    widgets: {
      exchange: {
        currencyFrom: 'FOO',
        currencyTo: 'BAR',
        input: '42'
      }
    },
    collections: {
      rates: {
        USD: {
          FOO: 0.4242,
          BAR: 0.2424
        }
      }
    }
  })
  it('should render', () => {
    expect(
      shallowToJson(shallow(<Input store={store} />).dive())
    ).toMatchSnapshot()
  })

  it('should call action on currency input change', () => {
    const props = {
      onInputChange: jest.fn()
    }

    const wrapper = mount(<Input store={store} {...props} />)
    const event = { target: { value: '42.00' } }

    wrapper.find('input').simulate('change', event)

    expect(store.getActions()).toMatchSnapshot()
  })
})
