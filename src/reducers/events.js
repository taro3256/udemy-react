import _ from 'lodash'
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.responce.data, 'id')
        case READ_EVENT:
        case CREATE_EVENT:
        case UPDATE_EVENT:
            const data = action.responce.data
            return { ...events, [data.id]: data }
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events } // スプレッド演算子を使うことで、更新後のデータを返してくれる
        default:
            return events
    }
}