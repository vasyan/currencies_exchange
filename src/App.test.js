import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from './App'

describe('<App>', () => {
  const store = configureMockStore([thunk])({
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

  beforeEach(() => {
    store.clearActions()
  })

  it('should render', () => {
    expect(
      shallowToJson(shallow(<App store={store} />).dive())
    ).toMatchSnapshot()
  })

  it('should fetch rates on mount', async () => {
    shallow(<App store={store} />).dive()

    expect(store.getActions()).toContainEqual({ type: 'rates/GET_RATES_START' })
  })
})
