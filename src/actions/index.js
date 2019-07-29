import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'http://udemy-utils.herokuapp.com/api/v1'
const QUERYSRING = '?token=token123'

// 一覧表示するイベント
export const readEvents = () => async dispatch => {
    const responce = await axios.get(`${ROOT_URL}/events${QUERYSRING}`)
    dispatch({ type: READ_EVENTS, responce })
}

// 新規追加するイベント
export const postEvent = values => async dispatch => {
    const responce = await axios.post(`${ROOT_URL}/events${QUERYSRING}`, values)
    dispatch({ type: CREATE_EVENT, responce })
}