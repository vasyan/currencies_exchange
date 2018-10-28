import { combineReducers } from 'redux'

import widgets from './widgets'
import collections from './collections'

const rootReducer = combineReducers({
  widgets,
  collections
})

export default rootReducer
