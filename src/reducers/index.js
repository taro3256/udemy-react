import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// export default combineReducers({ count, count2, count3 }) 複数の場合こんな風にかける