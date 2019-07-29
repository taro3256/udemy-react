import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT } from '../actions'

export default (events={}, action) => {
    switch (action.type){
        case READ_EVENTS:
            return _.mapKeys(action.responce.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events } // スプレッド演算子を使うことで、更新後のデータを返してくれる
        default:
            return events
    }
}