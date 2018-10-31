import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import Output from './index'

jest.mock('utils/getFieldStyles', () =>
  jest.fn().mockImplementation(() => ({ fontSize: 42 }))
)

describe('<Output>', () => {
  const store = configureMockStore()({
    widgets: {
      exchange: {
        currencyFrom: 'FOO',
        currencyTo: 'BAR',
        amount: '42'
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
      shallowToJson(shallow(<Output store={store} />).dive())
    ).toMatchSnapshot()
  })
})
