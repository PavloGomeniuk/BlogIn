import { combineReducers } from 'redux'
import session from './session'
import blog from './blog'

export default combineReducers({
  session,blog,
})
