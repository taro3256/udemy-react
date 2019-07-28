import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
// export default combineReducers({ count, count2, count3 }) 複数の場合こんな風にかける