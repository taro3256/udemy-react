import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

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

// 内容変更するイベント
export const  putEvent = values => async dispatch => {
    const responce = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSRING}`, values)
    dispatch({type: UPDATE_EVENT, responce })
}

// 詳細表示用のイベント
export const getEvent = id => async dispatch => {
    const responce = await axios.get(`${ROOT_URL}/events/${id}${QUERYSRING}`)
    dispatch({ type: READ_EVENT, responce })
}

// デリートするイベント
export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSRING}`)
    dispatch({ type: DELETE_EVENT, id })
}