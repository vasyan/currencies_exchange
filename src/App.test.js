import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from './App'

function getStore({
  hasError = false,
  isOnFetch = true,
  isInitialFetched = false
} = {}) {
  return configureMockStore([thunk])({
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
        },
        hasError,
        isOnFetch,
        isInitialFetched
      }
    }
  })
}

describe('<App>', () => {
  it('should render loader on initial fetch', () => {
    expect(
      shallowToJson(shallow(<App store={getStore()} />).dive())
    ).toMatchSnapshot()
  })

  it('should render error message on problem with initial fetch', () => {
    expect(
      shallowToJson(
        shallow(
          <App store={getStore({ hasError: true, isOnFetch: false })} />
        ).dive()
      )
    ).toMatchSnapshot()
  })

  it('should fetch rates on mount', async () => {
    const store = getStore()
    shallow(<App store={store} />).dive()

    expect(store.getActions()).toContainEqual({ type: 'rates/GET_RATES_START' })
  })
})
