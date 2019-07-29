import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
// export default combineReducers({ count, count2, count3 }) 複数の場合こんな風にかける